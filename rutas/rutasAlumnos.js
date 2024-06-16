import { Router } from "express";
import controladorAlumnos from "../controladores/controladorAlumnos.js"

const controlAlu = new controladorAlumnos()
const rutasAlumnos = Router()

rutasAlumnos.post("/" , controlAlu.crearAlumno)
rutasAlumnos.delete("/", controlAlu.borrarAlumno)
rutasAlumnos.get("/", controlAlu.mostrarAlumnos)
rutasAlumnos.post("/login", controlAlu.login)

export default rutasAlumnos