const express = require('express');
var cors = require('cors');
const { json } = require('express');

class Server{
constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
    //middelewares
    this.middelewares();

    //rutas
    this.routes();
}

middelewares(){

//corso
    this.app.use(cors());

//lectura y parceo del body
this.app.use(express,json());
//directorio publico
    this.app.use(express.static('public'));
}

routes(){
    this.app.use(this.usuariosPath , require('../routes/usuarios'));
   
}

listen(){
    this.app.listen(this.port,()=>{
        console.log(`Server listening on port ${this.port}`)
    })
}

}



module.exports = Server;