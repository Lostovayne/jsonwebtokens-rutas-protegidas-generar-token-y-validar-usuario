import express from "express";
import Router from "../router/routes.js";

export class Server {
    constructor() {
        this.app = express();
        this.middlewares();
        this.pathBase = "/";
        this.pathError = "/*";
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(Router);
    }

    routes() {
        this.app.get(this.pathError, (req, res) => {
            res.send("Error 404 ruta no encontrada");
        });
    }

    listen() {
        this.app.listen(3000, () => {
            console.log("Servidor corriendo en puerto 3000");
        });
    }
}
