const axios = require("axios");
const axiosSaveCountries =require("./src/functions/AxiosSaveCountries")
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async() => {
  console.log(`Server listening on port ${PORT}`);
  await axiosSaveCountries();
})
}).catch(error => console.error(error))
