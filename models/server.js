const express = require('express');
var cors = require('cors')

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

    this.app.use(cors())

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