'use strict';
//no uar parseint
//no usar .tostring
//de string a numerto
function BinarioADecimal(string) {
   let sum = 0
   let arr = string.split('').reverse()
   for (let i = 0; i < arr.length; i++){
      sum += Math.pow(2, i) * arr[i];
   }
   return sum;
} 





//de numero a string
function DecimalABinario(num) {
   let almacenador = []
   while (num !== 0) {
      let residuo = (num % 2)
      num = Math.floor(num / 2);
      almacenador.push(residuo)
   }
   return almacenador.reverse().join('')
   

   
   
      








 }
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
