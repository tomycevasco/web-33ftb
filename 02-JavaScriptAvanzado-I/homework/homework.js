/*# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.*/

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function (a, b, c) {
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1

console.log(bar); // te reconoce que hay una variable pero no a que esta asignada
console.log(bar); // ni te reconoce la variable porque no esta asignado con var.
foo();
function foo() { // la funcion de eleva completa asi que se deberia ver el hola
  console.log("Hola!");
}
var bar = 1;
baz = 2;

//-------------------------

var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // franco porque el if statement responde a true.

var instructor = "Tony";
console.log(instructor); // tony
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); // franco
  }
})();
console.log(instructor); // al estar adentro de una funcion no se modifica globalmente por 'franco', entonces queda 'tony'

var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); //the flash
  console.log(pm); //reverse flash
}
console.log(instructor); //the flash
console.log(pm); //franco

/*### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:*/

6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // 9'px'
"$" + 4 + 5; // $45
"4" - 2; // 2
"4px" - 2; // NaN
7 / 0; // error/infinity
{
}
[0]; // undefined
parseInt("09"); // 9
5 && 2; // te toma el 2 porque si son dos true devuelve el segundo
2 && 5; //devuelve el 5 por lo mismo
5 || 0; //
0 || (5)[3] + [3] - [10]; //si se suma se concatena string ; da 23 tomas 33 - 10
3 > 2 > 1;
[] == ![];

/*> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:*/

function test() {
  console.log(a);// undefined, toma la variable pero como que no esta definida
  console.log(foo());//2 , porque al estar en una funcion el hoistin hace busque la funcion y la ejecute

  var a = 1;
  function foo() {
    return 2;
  }
}

test();

//Y el de este código? :

var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack; // friskies
  }
  return snack; //meow mix 
}

getFood(false); //mentira, da undefined porque la var snak en la funcion hace hoisting pero nunca la define porque es false 

//### This

//¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());// aurelio de rosa

var test = obj.prop.getFullname;

console.log(test());// undefined, porque al estar en el var test, la palabra this,fullname, este this se refiere a una variable establcida en ese bloque por lo tanto no lo reconoce en el global y no esta definida

//### Event loop

//Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {    // el orden seria primero el 1, despues el 4 despues el 3 y ultimo el 2.
    console.log(3);
  }, 0);
  console.log(4);
}

printing();
