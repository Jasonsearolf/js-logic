


const escalera = (numero) => {

  
    let escaleraCompleta = '';

    for( let i = 1; i <= numero; i++){
        
        let resultado = '';
        for(let x = 1; x <= i; x++){
            resultado += `[-]`;
        }

        escaleraCompleta += resultado + '\n';
    }
    
    
    return escaleraCompleta;

}


console.log(escalera(5));


