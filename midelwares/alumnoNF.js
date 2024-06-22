export const alumnoNF = (req, res, next) => {
    res.status(404).send({ success: false, message: "alumno no encontrado" });
    next();
  };
  