//!CONEXIÓN DE BASE DE DATOS PostgreSQL CON sequelize A servidor

require("dotenv").config();//Si está en la raíz principal del proyecto, si no hay que especificar un path
const { Sequelize } = require("sequelize");


const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, 
{
  logging: false, 
  native: false, 
});

//! INSTANCIA MODELOS A SEQUELIZE AUTOMATICAMENTE

const basename = path.basename(__filename);

const modelDefiners = [];

//Lee automáticamente los archivos en el directorio 'models' y los carga en el arreglo modelDefiners.
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

//Define los modelos de la instancia sequelize
modelDefiners.forEach(model => model(sequelize));

//Pone los nombres de todos los modelos en mayúscula (convención común en JS)
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country,Activity } = sequelize.models;


//!RELACIÓN N:N
Country.belongsToMany(Activity,{through:'CountryxActivity'})
Activity.belongsToMany(Country,{through:'CountryxActivity'})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Country,Activity } = require('../db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};


//!TESTEA CONEXIÓN
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
testConnection();