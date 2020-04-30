// const dataModel = require("../models/dataModel");
const fs = require("fs");

async function createData(data, nameData) {
    let swapData;
    try {
        let rawData = fs.readFileSync(nameData, "utf8");
        swapData = JSON.parse(rawData);
        console.log("currentData =", swapData);
    } catch (error) {
        console.log("error in catch in creatData:", error);
        swapData = [];
    } finally {
        let newData = {
            content: data
        }
        // lamf sao chuyen doan nay tu model a oi
        swapData.push(newData);
        let saveData = JSON.stringify(swapData);
        fs.writeFileSync(nameData, saveData, err => {
            if (err) {
                console.log("err create data: ", err);
            } else {
                console.log("creat data successful");
            }
        })
    }
}

async function readAllData(nameData){
    let rawData = fs.readFileSync(nameData, "utf8");
        rawData = JSON.parse(rawData);
    return rawData;
}

async function deleteData(nameData){
    
}
module.exports = {
    createData: createData,
    readData: readAllData
};
