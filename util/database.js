const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db; 
const mongoConnect =(callback) =>{
    MongoClient.connect('mongodb+srv://BuntyBru:itbLTBPsXSfVG7Tp@cluster0-kg0bq.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true })
    .then(client=>{
        console.log("connection Succesful with the DB");
        _db=client.db('test');
        callback();
    })
    .catch(err => {
        console.log(err);
        
    })
}

const getDB=()=>{
    if(_db)
    {
        return _db
    }
    throw 'No database found'; 
}



module.exports = mongoConnect;
