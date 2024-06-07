import express from "express";
import conexion from "./conexion/conexion.js";
import { PORT } from "./configuracion/configuracion.js";


const app = express()

app.use(express.json())



app.listen(PORT, () => {
    console.log(`server ok ${PORT}`);
  });