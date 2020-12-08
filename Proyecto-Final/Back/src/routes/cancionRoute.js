const express= require('express');
const cancionController = require('../controllers/cancionController');
const routes= express.Router();



//visualizar canción
routes.get('/Canciones', cancionController.visualizarC);

//obtener canción
routes.get('/Canciones/:titulo', cancionController.obtenerCanciones) 

//agregar canción
routes.post('/Canciones', cancionController.agregarCancion)

//borrar canción
routes.delete('/Canciones/:titulo',cancionController.borrarCancion)

//Editar Cancion
routes.put('/Canciones/:titulo',cancionController.editarCancion )

module.exports =routes; 