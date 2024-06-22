import { Router } from "express";
import controladorAlumnos from "../controladores/controladorAlumnos.js"
import { verificador } from "../midelwares/verificador.js";
import { alumnoNF } from "../midelwares/alumnoNF.js";

const controlAlu = new controladorAlumnos()
const rutasAlumnos = Router()

rutasAlumnos.post("/" , controlAlu.crearAlumno)
rutasAlumnos.delete("/", controlAlu.borrarAlumno)
rutasAlumnos.get("/", controlAlu.mostrarAlumnos)
rutasAlumnos.post("/login", controlAlu.login)
rutasAlumnos.get("/me", verificador, controlAlu.me)
rutasAlumnos.use(verificador)
rutasAlumnos.get("/:id", alumnoNF, controlAlu.mostrarAlumnoPorId)
rutasAlumnos.use(alumnoNF)

export default rutasAlumnos