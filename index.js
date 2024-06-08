import express from "express";
import conexion from "./conexion/conexion.js";
import { PORT } from "./configuracion/configuracion.js";
import enrutador from "./rutas/enrutador.js";


const app = express()

app.use(express.json())

await conexion.sync({ force:false});
app.use("/api", enrutador);


app.listen(PORT, () => {
    console.log(`server ok ${PORT}`);
  });