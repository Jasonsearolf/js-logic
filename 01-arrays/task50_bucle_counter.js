
const bucles = (numeros) => {

    let bucleCounter = 0;

    let arrayNumeros = numeros.toString().split('');

    for(let numero of arrayNumeros){

        numero = parseInt(numero);

        if(numero === 0 || numero === 6 || numero === 9){
            bucleCounter++;
        }else if( numero === 8){
            bucleCounter += 2;
        }
    }

    return bucleCounter;

}

console.log(bucles(18896));