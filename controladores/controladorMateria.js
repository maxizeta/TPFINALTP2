import { Materia } from "../modelos/index"

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
            const { id } = req.params
            const { nota } = req.body
            const data = await Materia.update(
                {
                    nota,
                },
                {
                    where: {
                        id,
                    },
                }
            )
            res.status(200).send({ success: true, message: data });
        } catch (error) {
            res.status(500).send({ success: false, message: error.message });
        }
    }
}
export default ControladorMaterias