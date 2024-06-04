
const multiplicacion = (numero) => {
    
    
    for( let i = 0; i <= 10; i++){
        
        const text = `${numero} x ${i} es `
        const resultado = text + numero * i; 

        console.log(resultado);
    }

}

multiplicacion(5);
