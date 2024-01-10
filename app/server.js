const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.prefixPath = '/api'
        this.middlewares()
        this.routes()
    }

    middlewares() { 
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() { 
        this.app.use(this.prefixPath , require('../routes/taskRoutes'));
        this.app.use(this.prefixPath , require('../routes/userRoutes'));
        this.app.use(this.prefixPath , require('../routes/userTaskRoutes'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;