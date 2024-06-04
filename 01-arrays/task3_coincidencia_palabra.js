

const coincidencias = (frase , busqueda) => {

    const textoLimpio = frase.toLowerCase().replace(/[!,.]/gi, '');

    const palabras = textoLimpio.split(' ')

    let resultado = 0;

    let mapa ={};

    if(palabras.includes(busqueda)){
        
        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++;
            }else{
                mapa[palabra] = 1;
            }
        }

        resultado = mapa[busqueda];
    }else {

        resultado = 0;
    }

    return resultado;
}



console.log(coincidencias('Pedro, pedro! juega con Juan, Maria y su hermano pedro.', 'pedro'));