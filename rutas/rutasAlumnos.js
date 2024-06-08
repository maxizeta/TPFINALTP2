import { Router } from "express";
import controladorAlumnos from "../controladores/controladorAlumnos.js"

const controlAlu = new controladorAlumnos()
const rutasAlumnos = Router()

rutasAlumnos.post("/" , controlAlu.crearAlumno)

export default rutasAlumnos