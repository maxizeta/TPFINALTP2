import { Alumno } from "../modelos/index.js";

class ControladorAlumnos {
    constructor () {}

    crearAlumno = async (req, res) => {
        try {
          const { nombre, email, dni  } = req.body;
          const data = await Alumno.create({
            nombre, email, dni
          });
          res.status(200).send({ success: true, message: data });
        } catch (error) {
          res.status(500).send({ success: false, message: error.message });
        }
    }
}
export default ControladorAlumnos