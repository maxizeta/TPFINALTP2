import Alumno from "./alumnos.js"
import Materia from "./materias.js"


Alumno.belongsToMany(Materia, { through: 'AlumnoMateria' });
Materia.belongsToMany(Alumno, { through: 'AlumnoMateria' });


export {Alumno, Materia}