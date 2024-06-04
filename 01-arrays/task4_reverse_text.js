
//version sin usar metodos
const invertir = (cadena) => {

    let reverseText = '';

    for( let word of cadena ){
        reverseText = word + reverseText;
    }

    return reverseText;

}

//version con metodos:

const invertir2 = (cadena) => {

    const reverseText = cadena.split('').reverse().join('');

    return reverseText;
}


console.log(invertir('victor'));
console.log(invertir2('victor'));