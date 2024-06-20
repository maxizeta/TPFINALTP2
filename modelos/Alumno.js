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
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [8, 8],
              isNumeric: true,
            },
        },    
          
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: conexion,
        modelName: "Alumno"
    }
)
Alumno.beforeCreate(async (Alumno) => {
    const salt = await bcrypt.genSalt();
    Alumno.salt = salt;
    const contraHasheada = await bcrypt.hash(Alumno.contraseña, salt);
    Alumno.contraseña = contraHasheada;
  });

export default Alumno;