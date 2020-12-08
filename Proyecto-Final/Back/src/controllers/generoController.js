
const connection = require('../config/connection');


function visualizar(req, res) {
    if(connection){
        let sql = 'select * from Genero';
        connection.query(sql, (err, genero) => {
            if(err){
                res.send(err)
            } else {
                console.log(genero);
                res.json(genero);
            }
        })
    }
}

function obtenerGeneros(req, res) {
    if(connection){
        const { genero } = req.params;
        let sql = `select * from Genero WHERE genero= ${connection.escape(genero)}`;
        connection.query(sql, (err, genero) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(genero === undefined || genero.length === 0)
                mensaje = "No se encontró el Genero unu";

                res.json({error: false, data: genero, mensaje: mensaje})
            }
        })
    }
}

function agregarGenero(req, res){
    if(connection){
        const genero = req.body;
   

        let sql = 'INSERT INTO Genero set ?';
        connection.query(sql, [genero], (err, rows) => {
            if(err) {
                res.json({err: true, data: rows, mensaje: "El Genero ingresado tuvo problemas para agregarse"})
            } else {
                res.json({err: false, data: rows, mensaje: "Genero agregado correctamente"})
            }
        })
    }
}

function borrarGenero(req, res){
    if(connection){
        const {genero}= req.params;
        let sql = 'DELETE from Genero where genero = ?';
        connection.query(sql, [genero], (err, rows)=>{
            if(err){
                res.json(err)
            }else{
                let mensaje ="";
                if(rows.affectedRows ===0){
                    mensaje= "No se encontró el genero"
                } else{
                    mensaje = "Genero eliminado con éxito"
                }

                res.json({error: false, data: rows, mensaje: "Genero eliminado exitosamente"})
            }
        })
    }
}


module.exports = {
    visualizar,
    obtenerGeneros,
    agregarGenero,
    borrarGenero
}
