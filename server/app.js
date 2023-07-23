const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbServer = require('./dbServer');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));  

//create
app.post('/insert',(request,response) =>{

});

//read
app.get('/getAll',(request,response)=>{
    const db = dbServer.getDbServiceInstance();

    const result= db.getAllData();

    result
    .then(data => response.json({data:data}))
    .catch(err => console.log(err));

});
//update

//delete


app.listen(process.env.PORT,() => console.log('app is running'));