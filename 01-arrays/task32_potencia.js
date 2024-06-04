
const cuadrado = (arr) => {
    // let resultado = [];
    arr = arr
        .filter(e => typeof e === 'number')
        .map( e => Math.pow( e , 2));

    // for( let i of arr){
    //     resultado.push(i*i)
    // }

    // return resultado;

    return arr;
}


console.log(cuadrado([1,2,3,9,'hola']));