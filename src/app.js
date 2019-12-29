const express = require('express');
const mongoConnect = require('../util/database');
const app = express();

app.get('',(req,res)=>{
    res.send("Hello");
})
  
//passing the server starting code inside the mongoConnect function
mongoConnect(()=>{
    app.listen(3000,()=>{
        console.log("Server is active");
    }); 
}); 
