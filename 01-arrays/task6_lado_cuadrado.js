



const lado = (cantidad) =>{
    
    let lado = '';

    for(let i = 0; i < cantidad; i++){
        lado += '*';
    }
    
    return lado;
}

// console.log(lado(4))
// console.log(lado(4))

const cuadrado = (cantidad) => {

    let dibujo = lado(cantidad) + "\n";
    let contenido = '';   

    for( let i = 0; i < (cantidad-2); i++){
        contenido = '*';
        
        for( let x = 0; x < cantidad-2; x++){
            contenido += ' ';
        }

        contenido +='*'
        dibujo += contenido + '\n';
    }

    dibujo += lado(cantidad);
    

    return dibujo;


}

console.log(cuadrado(10));
