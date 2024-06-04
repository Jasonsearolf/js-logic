
const restaNumero = (n) => {

    let resultado = '';

    while(n >= 0){
        resultado += `- nº${n}` + '\n';
        n -= 8;
    }

    return resultado;

}

console.log(restaNumero(100));