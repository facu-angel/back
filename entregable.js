/*
1) Realizar un proyecto de servidor basado en node.js que utilice el modulo express 
e implemente los siguientes endpoints en el puerto 8080:
a)Ruta get '/produtos' que devuelva un array con todos los productos disponibles en el servidor
b)Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles

2) Incluir un archivo de texto 'productos.txt' y utilizar la clase contenedor del desafio anterior para acceder a
los datos persistidos del servidor 
*/
const express = require('express')
const app = express()
const PORT = 3000
const array = [0, 'marta', 'yoyo']
app.listen(PORT, ()=>{
    console.log(`Servidor http encuchando en el puerto ${PORT}` )
})

app.get('/prueba', (req, res)=>{
    res.send(array)
})

const p = console.dir(app.locals.title)
console.log(p)
