const express= require('express');
const generoController = require('../controllers/generoController');
const routes= express.Router();



//visualizar genero
routes.get('/Generos', generoController.visualizar);

//obtener genero
routes.get('/Generos/:genero', generoController.obtenerGeneros) 

//agregar genero
routes.post('/Generos', generoController.agregarGenero)

//borrar genero
routes.delete('/Generos/:genero',generoController.borrarGenero)


module.exports =routes; 