// const dataModel = require("../models/dataModel");
const fs = require("fs");

async function createData(nameData, username, password) {
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
            userName: username,
            pwd: password
           
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

async function createData1(data, nameData) {
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
    let swapData;
    let rawData = fs.readFileSync(nameData, "utf8");
        rawData = JSON.parse(rawData);
        console.log("currentData =", swapData);
    }
        

async function deleteData(nameData){
    
}
module.exports = {
    createData: createData,
    createData1: createData1,
    readData: readAllData

};
