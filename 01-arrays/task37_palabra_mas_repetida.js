

const elQueMasAparece = (input) => {

    if( typeof input === 'string'){
        input = input.split(' ');
    }

    let mapa = {};

    let masFrecuente = '';
    let mayorValor = 0;

    for(let e of input){
        if(mapa[e]){
            mapa[e]++;
        }else{
            mapa[e] = 1;
        }
    }

    console.log(mapa);
    
    for(let e in mapa){
        if(mapa[e] > mayorValor){
            mayorValor = mapa[e];
            masFrecuente = e;
        }
    }

    return [
        masFrecuente, 
        mayorValor,
    ]


}




console.log(elQueMasAparece('hola hola hola como estas papa de paco paco paco paco'));
console.log(elQueMasAparece([1,2,3,1,2,2,2,4,5]));