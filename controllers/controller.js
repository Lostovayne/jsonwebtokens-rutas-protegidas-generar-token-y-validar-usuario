import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import Users from "../data/users.js";
configDotenv();

const secretKey = process.env.SECRET_KEY;

const ValidarUsers = (req, res, next) => {
    //validar que el token que viene en el  req.headers.authorization sea valido con laa secretkey de jwt
    const token = req.headers.authorization;

    if (!token) {
        return res
            .status(400)
            .json({ msg: "No hay un token en la authorización" });
    }

    try {
        const payload = jwt.verify(token, secretKey);
        res.redirect("/profile/" + payload.user);
    } catch (error) {
        res.status(400).json({ msg: "Token no valido" });
    }
};

const GenerarToken = (req, res) => {
    const payload = req.body;

    if (!payload) {
        return res.status(400).json({ msg: "No hay datos" });
    }
    //validar usuario
    const filter = Users.filter(
        (user) =>
            user.user === payload.user && user.password === payload.password
    );

    if (!filter.length) {
        return res
            .status(400)
            .json({ msg: "El usuario o la contraseña son inválidos🧑‍🦼" });
    }

    const token = jwt.sign(payload, secretKey);
    res.json({ token });
};

const RutaProtegida = (req, res) => {
    const token = req.headers.authorization;
    const correoUser = req.params.user;

    if (!token) {
        return res
            .status(400)
            .json({ msg: "No hay un token en la authorización" });
    }

    try {
        const payload = jwt.verify(token, secretKey);

        console.log(payload.user);
        console.log(correoUser);

        if (payload.user !== correoUser) {
            return res
                .status(400)
                .json({ msg: "Token no valido para su usuario" });
        }

        res.send(`Bienvenido a su perfil de usuario: ${correoUser}`);
    } catch (error) {
        res.status(400).json({ msg: "Token no valido" });
    }
};

export { ValidarUsers, GenerarToken, RutaProtegida };
