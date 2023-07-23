const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: "localhost",
    user: "web_app",
    password: "test123",
    database: "web_app",
    port: 3300
});

connection.connect((err) =>{
    if(err){
        console.log(err.message);
    }
    console.log('db '+ connection.state);
})