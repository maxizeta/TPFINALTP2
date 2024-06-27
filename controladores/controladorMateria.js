import { where } from "sequelize";
import { Alumno, Materia } from "../modelos/index.js"

class ControladorMaterias {
    constructor() { }

    crearMateria = async (req, res) => {
        try {
            const { nombre, nota } = req.body;
            const data = await Materia.create({
                nombre, nota
            });
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(500).send({ success: false, message: error.message });
        }
    }
    borrarMateria = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await Materia.destroy({
                where: {
                    id,
                },
            });
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(500).send({ success: false, message: error.message });
        }
    };
    mostrarMaterias = async (req, res) => {
        try {
            const data = await Materia.findAll();
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(500).send({ success: false, message: error.message });
        }
    };
    agregarNota = async (req, res) => {
        try {
            const { id, AlumnoId } = req.params
            const { nota } = req.body
            const data = await Materia.update(
                {
                    nota,
                },
                {
                    where: {
                        id,
                        AlumnoId
                    },
                }
            )
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(500).send({ success: false, message: error.message });
        }
    }
    mostrarAlumnosPorMateria = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await Materia.findAll({
                include: [{
                    model: Alumno,
                    as: 'alumnos',
                }],
                where: {
                    id,
                }
            });
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(500).send({ success: false, message: error.message });
        }
    }
}
export default ControladorMaterias