import dotenv from 'dotenv'
dotenv.config();
import {resolve} from 'path';
import express from "express";
import homeRoutes from "./src/routes/homeRoutes";
import clienteRoutes from "./src/routes/clienteRoutes";
import torneioRoutes from "./src/routes/torneioRoutes";
import timesRoutes from "./src/routes/timeRoutes";
import jogadorRoutes from "./src/routes/jogadorRoutes";
import partidasRoutes from "./src/routes/partidaRoutes";
import golsRoutes from "./src/routes/golsRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import avatarClienteRoutes from "./src/routes/avatarClienteRoutes";

class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
        this.app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
          });
        this.app.use('/images/', express.static(resolve(__dirname, 'uploads', 'images')));
    }

    routes(){
        this.app.use('/', homeRoutes)
        this.app.use('/clientes', clienteRoutes);
        this.app.use('/torneios', torneioRoutes);
        this.app.use('/times', timesRoutes);
        this.app.use('/jogador', jogadorRoutes);
        this.app.use('/partidas', partidasRoutes);
        this.app.use('/gols', golsRoutes);
        this.app.use('/token', tokenRoutes);
        this.app.use('/avatar-cliente', avatarClienteRoutes);
    }
}

export default new App().app;