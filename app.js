const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.config();
        this.start();
    }

    config() {
        this.app.set('port', process.env.PORT || 3000);
    }

    routes() {

    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port " + this.app.get('port'));
        });
    }

}

const server = new Server();
module.exports = server.app;