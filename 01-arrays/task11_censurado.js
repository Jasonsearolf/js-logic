
// VERSION MIA : ERROR EN LA IMPRESION NO SE NECESITA ARRAY SINO REEMPLZAR LA PALABRAS DEL TEXTO
const busquedaCensurada = (texto , busqueda) => {
    
    try {
    
        const limpiarTexto = texto
                                .toLowerCase()
                                .replace(/[?,.]/, '')
                                .split(' ');
    
        const limpiarBusqueda = busqueda
                                    .toLowerCase()
                                    .replace(/[?,.]/, '');
    
        // console.log(limpiarTexto);
    
        const newArr = [];
        for ( let word of limpiarTexto){
    
            if( word === limpiarBusqueda){      
                newArr.push('[CENSURADO]')
            }
        }
    
        return newArr

    } catch (error) {
        if(!busqueda && !texto){
            return 'No puedes leer el texto y la busqueda'
        }else if(!busqueda){
            return 'No puedes hacer la busqueda';
        }
    }

    

}

//VERSION OPTIMIZADA

const busquedaCensurada2 = (texto=false, busqueda=false) => {
    let resultado = '';

    if(!texto && !busqueda){
        resultado = 'no puedes leer el texto y la busqueda';
    }else if(!texto && busqueda){
        resultado = 'puedes leer el texto';
    }else if(texto && !busqueda){
        resultado = 'no puedes hacer la busqueda';
    }else{

        resultado = texto.replace( new RegExp(busqueda, 'gi'), '[-CENSURADO-]');

        return resultado;
    }
}

// console.log(busquedaCensurada('Juan juega con Mario y Juan', 'juan'));
console.log(busquedaCensurada2('Juan juega con Mario y Juan', 'juan'));