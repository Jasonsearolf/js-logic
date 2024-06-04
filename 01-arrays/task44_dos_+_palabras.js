

const dosPalabras = (arr) => {

    let nuevos_elementos = [];

    for(let palabra of arr){
        if(palabra.includes(' ')){
            nuevos_elementos.push(palabra)
        }
    }
    return nuevos_elementos
}


console.log(dosPalabras(['hola mundo', 'Juan', 'Good bye', 'hola', 'hola que tal?']));