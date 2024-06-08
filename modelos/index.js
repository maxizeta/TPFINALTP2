import Alumno from "./Alumno.js"
import Materia from "./Materia.js"


Alumno.belongsToMany(Materia, { through: 'AlumnoMateria' });
Materia.belongsToMany(Alumno, { through: 'AlumnoMateria' });


export {Alumno, Materia}