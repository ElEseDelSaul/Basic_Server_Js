let {request, response} = require('express');
let express = require('express');

class Routes {

    constructor() {
        this.router = express();
        this.config();
    }

    config() {
        this.router.get('/', (request,response) => {
            response.json({message:"Get all Registers"});
        });
        this.router.post('/',(request,response)=>{
            let newRegister = request.body;
            response.json({message:"Add New Register",newRegister});
        })
        this.router.get('/:id',(request,response)=>{
            let {id} = request.params;
            response.json({message:"Get Register No. "+id});
        })
        this.router.delete('/:id',(request,response)=>{
            let {id} = request.params;
            response.json({message:"Delete Register No. "+id});
        })
        this.router.put('/:id',(request,response)=>{
            let {id} = request.params;
            let newRegister = request.body;
            response.json({message:"Update Register No. "+id,newRegister});
        })
    }

}

const routes = new Routes();
module.exports = routes.router;