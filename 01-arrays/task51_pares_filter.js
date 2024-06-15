
//VERSION CORTA

const splitNumbers = (numeros) => {
    return{
        pares: numeros.filter(num => num%2 === 0),
        impares:  numeros.filter(num => num%2 !== 0),
    }
}


//VERSION LARGA
/*const splitNumbers = (numeros) => {

    let pares = [];
    let impares = [];

    let newNumbers = numeros.toString().split('');

    for(let numero of newNumbers){
        numero = parseInt(numero);
        if(numero%2 === 0){
            pares.push(numero);
        }else{
            impares.push(numero);
        }
    }

    return (
        `pares: ${pares} \nimpares: ${impares}`
    )

}*/


//console.log(splitNumbers(26179436));
console.log(splitNumbers([2,6,1,7,9,4,3,6]));