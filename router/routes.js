import { Router } from "express";
import {
    GenerarToken,
    ValidarUsers,
    RutaProtegida,
} from "../controllers/controller.js";

const router = Router();

router.get("/", (req, res) => {
    res.send(
        "Ruta base favor dirigirse a /sign para crear su usuario o /login  si ya está registrado"
    );
});

router.post("/sign", GenerarToken);

router.post("/login", ValidarUsers);

router.get("/profile/:user", RutaProtegida);

export default router;
