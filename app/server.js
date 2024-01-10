const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.path = '/api'
        this.middlewares()
        this.routes()
    }

    middlewares() { 
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() { 
        this.app.use(this.path , require('../routes/taskRoutes'));
    }


    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;