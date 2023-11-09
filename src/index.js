//Requiero el modulo express
const express = require('express')
//Guardado en la constante app
const app = express()
//Requiero el modulo morgan
const morgan = require('morgan')

//middlewares
app.use(morgan('dev'))
//para poder obetener datos sencillos de formualrios
app.use(express.urlencoded({extended:false}))
//Para poder recibir y entender formatos Json
app.use(express.json())


//*******settings*********
app.set('port',process.env.PORT || 3000)
app.set('json spaces',2);

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'))

// starting the server



//La aplicación en el puerto 300+
app.listen(app.get('port'), ()  =>{
    console.log(`Server on port ${app.get('port')}`)
})