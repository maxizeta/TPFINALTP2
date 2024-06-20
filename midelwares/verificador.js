import { decodificadorDeToken } from "../tokens/token.js";

export const verificador = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("datos incorrectos");
    const { id, nombre } = decodificadorDeToken(token);
    req.user = { id, nombre };
    next()
  } catch (error) {
     res.status(500).send({ success: false, message: error.message });
  }
};
