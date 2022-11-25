import express from "express";

import operacionRouter from "./src/routes/operacion.router.js";

//import dotenv from "dotenv";
//import environment from "./src/config/environment.js"


//const { PORT } = environment;
const app = express();

//app.use(dotenv.config());
app.use(express.json());

app.use( "/operations", operacionRouter);


app.get('/', function(req, res){
    const student= "Daniela Paredes"
    const title= "Tarea 7"
    res.send({student, title});
})

app.listen(3000, () => {
    console.log("Server started on 3000")
});
