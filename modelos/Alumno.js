import {DataTypes, Model} from "sequelize"
import conexion from "../conexion/conexion.js"

class Alumno extends Model{}

Alumno.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: conexion,
        modelName: "Alumno"
    }
)

export default Alumno;