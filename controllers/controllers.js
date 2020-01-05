let express = require('express');

class Ctrl {

    constructor() {
        this.app = express();
    }

    getAll(request, response) {
        response.json({ message: "Get all Registers" });
    }

    getOne(request, response) {
        let { id } = request.params;
        response.json({ message: "Get Register No. " + id });
    }

    add(request, response) {
        let newRegister = request.body;
        response.json({ message: "Add New Register", newRegister });
    }

    delete(request, response) {
        let { id } = request.params;
        response.json({ message: "Delete Register No. " + id });
    }

    update(request, response) {
        let { id } = request.params;
        let newRegister = request.body;
        response.json({ message: "Update Register No. " + id, newRegister });
    }

}

const ctrl = new Ctrl();
module.exports = ctrl;