//!SERVER CONFIGURATION

const express = require("express");
const router = require("./routes/MainRoute");//Importación de rutas
const morgan = require("morgan");
const cors = require("cors");

const server = express();//Al ejecutar express, la const server tomar una serie de propiedades que puede usar.

//?Middlewares
server.use(morgan("dev"));//Permite recibir códigos de status.
server.use(express.json());//Configura express para que pueda analizar y manejar datos enviados al server en formato JSON. Los convierte en un objeto JS.
server.use(cors());//seguridad del browser. Es obligatorio configurar 

//*Importante configurar middlewares antes de las peticiones, para poder recibir las respuesta.
server.use(router); 

module.exports = server; 
