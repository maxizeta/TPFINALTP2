import  {Router}  from "express"
import rutasAlumnos from "./rutasAlumnos.js"
import rutasMaterias from "./rutasMaterias.js";

const enrutador = Router()

enrutador.use("/alumnos", rutasAlumnos)
enrutador.use("/materias", rutasMaterias)

export default enrutador