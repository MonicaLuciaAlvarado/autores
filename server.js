/*
Creamos server.js
terminal: npm init -y (crea package.json)
cambia node a nodemon en package.json en start
npm install nodemon -g (lo instala de manera global)
npm install express mongoose cors
Crear siguientes carpetas:
    -server
        -config
        -controllers
        -models
        -routes
Crear el archivo mongoose.config.js en la carpeta config
Crear el archivo autor.model.js
Crear el archivo autor.controller.js
Crear el archivo autor.routes.js
Llenar server.js
npm start
Puedo hacer peticiones en postman


_________________________________________________
Client
npx create-react-app client
en nueva terminal: cd client
npm install axios react-router-dom
*/

const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json(), express.urlencoded({extended:true}));

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL de React
        origin: "http://localhost:3000"
    })
)

//Inicializar la BD
require("./server/config/mongoose.config");

//Importar rutas
const misRutas = require("./server/routes/autor.routes");
misRutas(app);

//Ejecutamos el server
app.listen(8000, () =>console.log("Servidor listo!"));
