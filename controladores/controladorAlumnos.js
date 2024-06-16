import { Alumno } from "../modelos/index.js";
import { generadorDeToken, decodificadorDeToken } from "../tokens/token.js";

class ControladorAlumnos {
    constructor () {}

    crearAlumno = async (req, res) => {
        try {
          const { nombre, email, dni, contraseña  } = req.body;
          const data = await Alumno.create({
            nombre, email, dni, contraseña
          });
          res.status(200).send({ success: true, message: data });
        } catch (error) {
          res.status(500).send({ success: false, message: error.message });
        }
    }
    borrarAlumno = async (req, res) => {
      try {
        const { id } = req.params;
        const data = await Alumno.destroy({
          where: {
            id,
          },
        });
        res.status(200).send({ success: true, message: data });
      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }
    };
    mostrarAlumnos = async (req, res) => {
      try {
        const data = await Alumno.findAll();
        res.status(200).send({ success: true, message: data });
      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }
    };
    login = async (req, res) => {
      try {
        const { mail, contraseña } = req.body;
        const data = await Alumno.findOne({
          where: {
            mail,
          },
        });
        if (!data) throw new Error("datos incorrectos");
        const validacion = await data.validacioncontra(contraseña);
        if (!validacion) throw new Error("datos incorrectos");
        const payload = {
          id: data.id,
          nombre: data.nombre,
        };
        const token = generadorDeToken(payload);
        res.cookie("token", token);
        res.status(200).send({ success: true, message: "datos correctos, podes ingresar" });
      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }
    };

}
export default ControladorAlumnos