

const calculadora = (n1, n2) => {

    let resultado = `
    La suma es: ${n1+n2};
    La resta es: ${n1-n2};
    La multiplicación es: ${n1*n2};
    La división es: ${n1/n2};
    `

    return resultado;
}


console.log(calculadora(10,10));