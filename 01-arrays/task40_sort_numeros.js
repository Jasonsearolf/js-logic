
const ascendente = (arr) => {
    let ordenados = arr.sort((a,b) => a - b);
    return {
        'bajo' : ordenados[0], 
        'alto' : ordenados[ordenados.length-1],

    }
}

console.log(ascendente([1,7,4,9,3,2]));