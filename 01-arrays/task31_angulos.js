


const angulos = (parametro) => {

    let resultado = '';

    if(parametro < 90){
        resultado = 'es agudo';
    }else if(parametro === 90){
        resultado = 'es recto';
    }else if( parametro > 90 && parametro < 180){
        resultado = 'es obtuso;'
    }else if (parametro === 180){
        resultado = 'es llano';
    }else if (parametro > 180 && parametro < 360){
        resultado = 'es concavo'
    }

    return resultado;
}


console.log(angulos(185));