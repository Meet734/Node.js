const fs = require('fs');
const {validateItem, eventEmitter, generateResponse} = require('../../helper');
const {Item} = require("../../models/item");
const nodemailer = require('nodemailer');

function addItem(req, res){
    if(!req || !res){
        return;
    }
    if((req.method === 'POST' || req.method === 'OPTIONS') && req.url === '/api/data'){
        // console.log("here in the code");
        let sInputData = "";
        req.on('data', (data) => {
            //taking request body in chunks
            sInputData += data;
        }).on('end', () => {
            //reading request body complete and show success message
            // console.log(sInputData);
            console.log("Input data read complete");
            console.log("\t\t\tNewItem: "+sInputData);
            // sInputData = sInputData.join();

            
            try{
                // sInputData = '{'+sInputData+'}';
                // console.log(sInputData);

                let oInputItem = JSON.parse(sInputData);
                console.log(oInputItem);
                // console.log("true: ", Object.hasOwn(oInputItem, "sName") && Object.hasOwn(oInputItem, "nQuantity") && Object.hasOwn(oInputItem, "nPrice"));
                // console.log(validateItem(oInputItem, 'new'));
                console.log("New data");
                //validate the user input is in proper manner and valid
                if(!(Object.hasOwn(oInputItem, "sName") && Object.hasOwn(oInputItem, "nQuantity") && Object.hasOwn(oInputItem, "nPrice") && validateItem(oInputItem, 'new'))){
                    //error because of invalid request data
                    throw new Error("Invalid input data...");
                }

                //simply read the data as array and just push the new data, writeback the data
                let aItemData = JSON.parse(fs.readFileSync('data.json'));
                aItemData.push(new Item(oInputItem.sName, oInputItem.nQuantity, oInputItem.nPrice));

                fs.writeFileSync('data.json', JSON.stringify(aItemData));

                //event call
                eventEmitter.emit('itemCreated');
                generateResponse(res, 201, "application/json", `Data added successfully\nData: ${JSON.stringify(oInputItem)}`);

                handleMail(oInputItem);
                return;
            }
            catch(error){
                // console.log("Error in writing data: ", error.message);
                eventEmitter.emit('error');
                generateResponse(res, 500, "application/json", `Error found: ${error.message}`);
            }
        }).on('error', (error) => {
            generateResponse(res, 404, "application/json", `Error found: ${error.message}`);
        });
    }
}

//send the main when new item is added...
function handleMail(oAddedItem){
    console.log("Sending email...");
    nodemailer.createTestAccount((err, account) => {
        if (err) {
            console.error('Failed to create a testing account. ' + err.message);
            return process.exit(1);
        }
    
        console.log('Credentials obtained, sending message...');
    
        // Create a SMTP transporter object
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'kendall.shanahan@ethereal.email',
                pass: 'SNFDm6fyVz6pMp2PBs'
            }
        });
    
        // Message object
        let message = {
            from: 'kendall.shanahan@ethereal.email',
            to: 'meetvaghasiya734@gmail.com',
            subject: 'Nodemailer example',
            text: JSON.stringify(oAddedItem),
            html: `<p></b>${oAddedItem.sName}</br>${oAddedItem.nQuantity}</br>${oAddedItem.nPrice}</p>`
        };
    
        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }
    
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });
        
}
module.exports = addItem;