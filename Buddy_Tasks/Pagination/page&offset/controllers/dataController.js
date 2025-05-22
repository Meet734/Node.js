const fs = require('fs');
const path = require('path');

function readData(nStartPage = 1, nPageOffset = 5){
    const aAllData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'data.json')));
    const nOffset = nStartPage+nPageOffset;
    let ndataIdx = 0;
    const aNeededData = aAllData.filter((oItem) => {
        ndataIdx++;
        return (ndataIdx >= nStartPage && ndataIdx < nOffset);
    });

    console.log("Served: ", aNeededData.length);
    return aNeededData;
}

function serveData(req, res){
    console.log("#header: ", req.headers);
    console.log("Query: ", req.query);
    // const temp = JSON.parse(req.query.page);
    const temp = (req.query.page);
    console.log(temp.length);
    const keys = Object.keys(temp);
    console.log("recieved: ", keys);
    const newKeys = keys.sort();
    console.log("NewKeys: ", newKeys);

    const {page, pageOffset} = req.query;

    if(!page){
        //serve from the start
        const aData = readData();
        return res.json(aData);
    }
    const aData = readData(+page, +pageOffset);

    res.json({"Data": aData});
}

module.exports = {
    serveData
}