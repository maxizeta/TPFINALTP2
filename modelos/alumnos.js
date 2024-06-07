import {DataTypes, Model} from "sequelize"

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
    }
)