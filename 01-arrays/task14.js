
// MI VERSION
const TextRepeater = (text, multiple) => {

    let resultado = '';

    for( let i = 0; i < multiple; i++){
        resultado += text;
    }  

    return resultado;
}

console.log(TextRepeater('victor', 5));


//OPCION USANDO THIS
String.prototype.repetir = (multiple) => {

    let resultado = '';

    for( let i = 0; i < multiple; i++){
        resultado += this;
    }  

    return resultado;

}

console.log('juan'.repeat(4));