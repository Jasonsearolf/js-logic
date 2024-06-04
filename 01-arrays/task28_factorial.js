
// MI METODO
const factorial = (numero) => {

    let result = 0;

    const arr = [1];

    for(let i = 1; i <= numero; i++){
        
        
        result = arr[i-1] * i
        
        arr.push(result);
    }

    return result
}

console.log(factorial(5));



// OTRO METODO MAS  CORTO

const newFactorial = (numero) => {
    let resultado = 1;
    for(let i = 1; i <= numero; i++){
        resultado *= i;
    }

    return resultado;

}


console.log(newFactorial(5));