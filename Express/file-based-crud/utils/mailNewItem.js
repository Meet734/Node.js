const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'christ.bernier42@ethereal.email',
        pass: 'pSqxA2Ne1sPk4aP1gj'
    }
});
function mailNewItem(oNewItem){

        // Message object

        let sNewItem = JSON.stringify(oNewItem);
        console.log("Sennding mail..")
        let message = {
            from: 'christ.bernier42@ethereal.email',
            to: 'meetvaghasiya734@gmail.com',
            subject: 'New Item Added',
            html: `<p><b>${sNewItem}</p>`
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
    
}

module.exports = mailNewItem;