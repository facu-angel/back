/*
1) Realizar un proyecto de servidor basado en node.js que utilice el modulo express 
e implemente los siguientes endpoints en el puerto 8080:
a)Ruta get '/produtos' que devuelva un array con todos los productos disponibles en el servidor
b)Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles

2) Incluir un archivo de texto 'productos.txt' y utilizar la clase contenedor del desafio anterior para acceder a
los datos persistidos del servidor 
*/
const Contenedor = require('./contenedor.js')
let producto1 = new Contenedor
producto1.saveObject({id:1, producto:'salsa'})

let producto2 = new Contenedor
producto2.saveObject({id:2, producto:'fideo'})

let producto3 = new Contenedor
producto3.saveObject({id:3, producto:'tamales'})

const fs = require('fs')
const express = require('express')
const app = express()
const PORT = 8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor http encuchando en el puerto ${server.address().port}` )
})

app.get('/productos', (req, res)=>{
    res.send(producto1.getAll())
})

app.get('/productoRandom', (req, res)=>{
    let numeroA = Math.floor(Math.random() * 3) + 1
    res.send(producto1.getById(numeroA))
})

