//DESESTRUCTURACION Y OBJ LITERALES.
let pileta = {
    grande: '8x8',
    chica() {
        console.log('wowow')
    }
}
let { chica, grande} = pileta
console.log(chica())
console.log(grande)
let arraysito = [1, 4, 8, 10, 150]
let [chimichimi, four, six] = arraysito
console.log(six)
//-------------------------------------------------------------//
//METODO FOR EACH
array = [1, 2, 3, 4, 5]
array.forEach((a,c)=> {
    console.log(a,c)
    
});
function multi() {
    var a = 15
    var b = 18
    var c = 77
    return (a * b) + c
}
console.log(multi())
//------------------------------------------------------------------//

console.log

