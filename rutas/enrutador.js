import  router  from "express"
import rutasAlumnos from "./rutasAlumnos.js"

const enrutador = router()

enrutador.use("/alumnos", rutasAlumnos)

export default enrutador