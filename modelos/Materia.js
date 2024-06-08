import {DataTypes, Model} from "sequelize"
import conexion from "../conexion/conexion.js"

class Materia extends Model{}

Materia.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nota: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: conexion,
        modelName: "Materia"
    }
    
)

export default Materia