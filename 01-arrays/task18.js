

const f_divisor = (number, divisor) => {
    
    if(number%divisor=== 0){
        return divisor
    }else{
        return divisor + ' no es divisor'
    }
}



const mostrarDivisor = (numero) => {
    for( let i = 0; i <= numero; i++){ 
        let esDivisor = f_divisor(numero, i);
        
        if(esDivisor) console.log(esDivisor);
    }
}

mostrarDivisor(15);
