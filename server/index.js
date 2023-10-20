//!SERVER INITIALIZATION

const axiosSaveCountries =require("./src/utils/index.js")
const server = require("./src/server");
const { conn } = require('./src/db.js');//
const PORT = 3001;//Puerto de escucha activa.Abierto para permitir comunicación con front End y db

conn.sync({ force: true }).then(() => {//sincronización db a server, con sequelize. Setear en false cuando termine la edición, para que no se borre la db cada vez que se reinicie el servidor.

server.listen(PORT, async() => {
  console.log(`Server listening on port ${PORT}`);
  await axiosSaveCountries();
})

}).catch(error => console.error(error))
 