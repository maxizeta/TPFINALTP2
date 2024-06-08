import {Model} from "sequelize"

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