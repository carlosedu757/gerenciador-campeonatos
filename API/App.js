import dotenv from 'dotenv'
dotenv.config();

import express from "express";
import homeRoutes from "./src/routes/homeRoutes";
import clienteRoutes from "./src/routes/clienteRoutes";
import torneioRoutes from "./src/routes/torneioRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";

class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/', homeRoutes)
        this.app.use('/clientes', clienteRoutes);
        this.app.use('/torneios', torneioRoutes);
        this.app.use('/token', tokenRoutes);
    }
}

export default new App().app;