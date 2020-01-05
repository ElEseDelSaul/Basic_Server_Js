const express = require('express');
//Routes
const routes = require('./routes/routes');

class Server {

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.start();
    }

    config() {
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes() {
        this.app.use(routes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port " + this.app.get('port'));
        });
    }

}

const server = new Server();
module.exports = server.app;