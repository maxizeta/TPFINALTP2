import express from "express";
import conexion from "./conexion/conexion.js";
import { PORT } from "./configuracion/configuracion.js";
import enrutador from "./rutas/enrutador.js";
import cookieParser from "cookie-parser";
import { notFound } from "./midelwares/notFound.js";

const app = express()
app.use(cookieParser())

app.use(express.json())

app.use(notFound)

await conexion.sync({ force:true});
app.use("/api", enrutador);


app.listen(PORT, () => {
    console.log(`server ok ${PORT}`);
  });