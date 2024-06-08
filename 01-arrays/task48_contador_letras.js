
const soloUnaVEz = (letras) => {

    let resultado = {};
    let unicos = [];

    let newLetras = letras.replace(/[^\w]/gi, '');

    for(let letra of newLetras){
        // console.log(letra);
        if(!resultado[letra]){
            resultado[letra] = 1;
        }else{
            resultado[letra]++
        }
    }

    for(let result in resultado){
        if(resultado[result] <= 1){
            unicos.push(result);
        }
    }

    return (
        `valores unicos ${unicos} y valor inicial ${unicos[0]}`
    )

}


console.log(soloUnaVEz('frase frase hoy'));