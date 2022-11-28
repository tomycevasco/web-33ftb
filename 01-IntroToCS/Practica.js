//DESESTRUCTURACION Y OBJ LITERALES.
let pileta = {
    grande: '8x8',
    chica() {
        console.log('wowow')
    }
}

//-------------------------------------------------------------//
//METODO FOR EACH
array = [1, 2, 3, 4, 5]
array.forEach((a,c)=> {
    console.log(a,c)
    
});
let { chica, grande } = pileta
console.log(chica())
console.log(grande)
let arraysito = [1, 4, 8, 10, 160]
let [chimi, four, sixx] = arraysito
console.log(sixx)
function multi() {
    var a = 15
    var b = 18
    var c = 77
    return (a * b) + c
}
console.log(multi())
//------------------------------------------------------------------//
//OBJECT.CREATE// SIRVE PARA CREAR UN OBJETO CON OTRO YA PREDETERMINADO.
const person = {
    holaa: 'pupi',
    puto: 'putaso',
    saludo() {
        return 'hola '+ this.holaa+ ' soy re '+ this.puto 
    }
}
var hola = Object.create(person)
console.log(person)
hola.holaa  = 'pipito'
hola.puto = 'pelotudito'
console.log(hola.saludo())
console.log(person.saludo())
console.log(hola.__proto__)
//---------------------------------------------------------------//

