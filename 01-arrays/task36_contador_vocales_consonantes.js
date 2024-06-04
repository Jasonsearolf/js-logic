

const contadorLetras = (texto) => {
    let vocales = 0;
    let consonantes = 0;
    let texto_limpio = '';

    texto_limpio = texto.split('').filter(e => /[áéíóú\w]/gi.test(e) && isNaN(e))
                        .join('');

    for(let e of texto_limpio){
        if(e = /[aeiouáéíóú]/gi.test(e)){
            vocales++;
        }else{
            consonantes++;
        }
    }

    return `
            Vocales son: ${vocales}
            Consonantes son: ${consonantes}      
    `

}


console.log(contadorLetras('Paloma64@hotmail.com'));