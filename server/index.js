//!SERVER INITIALIZATION

const axiosSaveCountries =require("./src/utils/index.js")
const server = require("./src/server");
const { conn } = require('./src/db.js');//
const PORT = 3001;

conn.sync({force:false}).then(() => {

server.listen(PORT, async() => {
  console.log(`Server listening on port ${PORT}`);
  await axiosSaveCountries();
})

}).catch(error => console.error(error))
 