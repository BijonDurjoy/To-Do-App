const mysql = require('mysql');
const dotenv = require('dotenv');
let insance = null;
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
    //console.log('db '+ connection.state);
})

class Dbservice{
    static getDbServiceInstance(){
        return insance ? insance: new Dbservice;
    }
    async getAllData(){
        try{
            const response = await new Promise((resolve,reject) =>{
                const query = "SELECT * FROM names;";

                connection.query(query,(err,results)=>{
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            })
            return response;
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = Dbservice;