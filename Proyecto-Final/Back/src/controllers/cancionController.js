const connection = require('../config/connection');

function visualizarC(req, res) {
    if(connection){
        let sql = 'select * from Cancion';
        connection.query(sql, (err, cancion) => {
            if(err){
                res.send(err)
            } else {
                console.log(cancion);
                res.json(cancion);
            }
        })
    }
}

function obtenerCanciones(req, res) {
    if(connection){
        const { titulo } = req.params;
        let sql = `select * from Cancion WHERE titulo= ${connection.escape(titulo)}`;
        connection.query(sql, (err, titulo) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(titulo === undefined || titulo.length === 0)
                mensaje = "No se encontró la canción unu";

                res.json({error: false, data: titulo, mensaje: mensaje})
            }
        })
    }
}

function agregarCancion(req, res){
    if(connection){
        const cancion = req.body;
   

        let sql = 'INSERT INTO Cancion set ?';
        connection.query(sql, [cancion], (err, rows) => {
            if(err) {
                res.json({err: true, data: rows, mensaje: "La canción ingresada tuvo problemas para agregarse"})
            } else {
                res.json({err: false, data: rows, mensaje: "Cancion agregada correctamente"})
            }
        })
    }
}

function borrarCancion(req, res){
    if(connection){
        const {titulo}= req.params;
        let sql = 'DELETE from Cancion where titulo = ?';
        connection.query(sql, [titulo], (err, rows)=>{
            if(err){
                res.json(err)
            }else{
                let mensaje ="";
                if(rows.affectedRows ===0){
                    mensaje= "No se encontró la canción"
                } else{
                    mensaje = "Canción eliminada con éxito"
                }

                res.json({error: false, data: rows, mensaje: "Canción eliminada exitosamente"})
            }
        })
    }
}

function editarCancion(req, res){
    if(connection){
        const { titulo } = req.params;
        const cancion = req.body;
        let sql = 'UPDATE Cancion set ? where titulo = ?';
        connection.query(sql, [cancion, titulo], (err, rows) => {
            if(err){
                res.json(err)
            } else {
                let mensaje = "";
                if(rows.changedRows === 0){
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Cancion modificada con exito"
                }
                res.json({error: false, data: rows, mensaje: mensaje})
            }
        })
    }
}


module.exports = {
    visualizarC,
    obtenerCanciones,
    agregarCancion,
    borrarCancion,
    editarCancion
}
