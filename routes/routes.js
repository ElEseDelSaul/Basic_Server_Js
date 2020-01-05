let express = require('express');
//Controllers
let ctrl = require('../controllers/controllers');

class Routes {

    constructor() {
        this.router = express();
        this.config();
    }

    config() {
        this.router.route('/')
            .get(ctrl.getAll)
            .post(ctrl.add)
        this.router.route('/:id')
            .get(ctrl.getOne)
            .delete(ctrl.delete)
            .put(ctrl.update)
    }

}

const routes = new Routes();
module.exports = routes.router;