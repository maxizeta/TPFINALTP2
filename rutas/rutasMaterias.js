import { Router } from "express";
import ControladorMaterias from "../controladores/controladorMateria.js";

const controlMat = new ControladorMaterias()
const rutasMaterias = Router()

rutasMaterias.post("/" , controlMat.crearMateria)
rutasMaterias.delete("/", controlMat.borrarMateria)
rutasMaterias.get("/", controlMat.mostrarMaterias)
rutasMaterias.put("/:id", controlMat.agregarNota)

export default rutasMaterias