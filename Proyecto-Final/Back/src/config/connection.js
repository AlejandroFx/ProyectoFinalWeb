const mysql= require('mysql')

const objectConnection = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "Pk1040204",
    "database": "proyecto_final"
}

const myConn= mysql.createConnection(objectConnection);

myConn.connect((error)=>{
    if(error){
        console.log("Error al conectar la BD", error);
    }else{
        console.log("Se conecto la BD con éxito");
    }
})

module.exports= myConn;

