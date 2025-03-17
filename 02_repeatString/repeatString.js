const repeatString = function(word, times) {
if(times<0) return "ERROR"
//create variable to return
let string=""

//solucion 2 transformamos el string en un array y le añadimos 1 por cada iteracion de un bucle for
for(let i=0;i<times;i++){
    string+=word
};
return string;
};


// Do not edit below this line
module.exports = repeatString; 
 /*

const repeatString = function (word, times) {
    if (times < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
  };
  
  module.exports = repeatString;
*/
