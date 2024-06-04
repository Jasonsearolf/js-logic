

const alCuadrado = (numero) => {

    let cuadrados = [];
    for(let i = 0; i <= numero; i++){
        cuadrados += Math.pow(i, 2) + '\n';
    }

    return cuadrados;
}

console.log(alCuadrado(5));