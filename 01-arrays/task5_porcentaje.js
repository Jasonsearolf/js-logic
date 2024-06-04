

const calcularPorcentaje = (porciento, numero) =>{

    const operacion = porciento*(numero/100);
    const resultado =  `El ${porciento}% de ${numero} es: ${operacion}`;

    return resultado;

}



console.log(calcularPorcentaje(21, 1000));