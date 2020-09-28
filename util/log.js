const Record = require('../model/Record')

function createRecord(message,user){
    let record={
        recordInfo:message,
        recordTime:new Date(),
        jobNumber:user.jobNumber,
        realName:user.realName
    };
    Record.create(record,function(err,record){
        if(err){
            console.log(err);
        }
    })
}

function findRecord(callback){
    Record.find(function(err,recordList){
        callback(err,recordList);
    })
}

module.exports = {
    createRecord:createRecord,
    findRecord:findRecord
}