const fs = require('fs')
//const { type } = require('os')
//const { isModuleNamespaceObject } = require('util/types')
fs.writeFileSync('productos.txt', '\n')
class Contenedor {
    saveObject(objeto){
        //recibe un objeto, lo guarda en el archivo, devuelve el id asignado
        fs.appendFileSync('productos.txt', `${JSON.stringify(objeto)};`)
        
        return objeto.ids
    }
    getById(number){
        //recibe un id y devuelve el objeto con ese id o null si no esta
        const archivo = fs.readFileSync('productos.txt', 'utf-8') 
        const array = archivo.split(';')
        const arrayNuevo = []
        for(let i=0; i<array.length - 1; i++){
            var objeto = JSON.parse(array[i])
            arrayNuevo.push(objeto)
        }
        let find = arrayNuevo.find(e=>e.id == number)
        if(find) return find
        else return 'No se encontro el objeto'
        
    }
    getAll(){
        //devuelve un array con los objetos presentes en el archivo
        const archivo = fs.readFileSync('productos.txt', 'utf-8') 
        const array = archivo.split(';')
        const arrayNuevo = []
        for(let i=0; i<array.length - 1; i++){
            var objeto = JSON.parse(array[i])
            arrayNuevo.push(objeto)
        }
        return arrayNuevo
    }
    deleteById(number){
        //elimina del archivo el objeto con el id buscado
        const archivo = fs.readFileSync('productos.txt', 'utf-8') 
        const array = archivo.split(';')
        const arrayNuevo = []
        for(let i=0; i<array.length - 1; i++){
            var objeto = JSON.parse(array[i])
            arrayNuevo.push(objeto)
        }
        let filter = arrayNuevo.filter(e=>e.id != number)
        fs.writeFileSync('productos.txt', `${JSON.stringify(filter)};` )
    }
    deleteAll(){
        //elimina todos los objetos presentes en el archivo
        fs.writeFileSync('productos.txt', '')
    }
}
module.exports = Contenedor
/* const producto = new Contenedor
producto. saveObject({id:1, producto:'arroz'})
producto. saveObject({id:2, producto:'pan'})
//producto.deleteAll()
console.log(producto.getById(1))
console.log(producto.getAll())
console.log(producto.deleteById(1)) */


                                        //NUMERO ALEATORIO


/* function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

let numeroA = Math.floor(Math.random() * 3) + 1
console.log(numeroA) */