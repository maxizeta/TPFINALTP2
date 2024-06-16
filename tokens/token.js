import jwt from "jsonwebtoken";
import { SECRET } from "../configuracion/configuracion.js";

export const generadorDeToken = (payload) => {
  const token = jwt.sign(payload, SECRET, { expiresIn: "2d" });
  return token;
};

export const decodificadorDeToken = (token) => {
  const decotoken = jwt.verify(token, SECRET);
  return decotoken;
};
