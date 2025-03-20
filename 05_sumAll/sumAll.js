
const sumAll = function (a, b) {
    let sumando = 0;

    // Descartamos valores negativos y decimales
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) { 
        return "ERROR"; // 🚀 Ahora sí detiene la ejecución
    }

    // Asegurar que `a` sea el menor y `b` el mayor
    if (b < a) {
        let c = a;
        a = b;
        b = c;
    }

    // Sumar los números entre `a` y `b`
    for (let i = a; i <= b; i++) {
        sumando += i;
    }

    return sumando;
};

// Do not edit below this line
module.exports = sumAll;





/*
const sumAll = function(a,b) {
    
    let sumando=0
    //Descartamos valores negativos y decimales
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) { 
        console.log("ERROR");
        return
    } else {
       if(a<b){
        
        let c=a
        a=b
        b=c
        
       }
       
        //crear for desde el primero al segundo acumulando en sumAll
        for(let i=a;i<=b;i++){
            
sumando+=i

       }
       
       console.log(a)
       console.log(b)
       console.log(sumando)
        return sumando
    }



//definir suma=0
//forEach sum+=[item]
};













// Do not edit below this line
module.exports = sumAll;
 */