

const masUsado = (text) =>{
    let newtext = text.replace(/[' ',]/gi, '');
    console.log(newtext);
    let mapTexto = {}; 
    let maxValue = 0;
    let maxRepeat = '';
    
    for( let letra of newtext){
        
        if(!mapTexto[letra]){
            mapTexto[letra] = 1;
        }else{
            mapTexto[letra]++;
        }
    }
        //----------------------      

        for( let x in mapTexto){
            if(mapTexto[x] > maxValue){
                maxValue = mapTexto[x];
                maxRepeat = x;
                console.log(`${x} vale ${mapTexto[x]}`);
            }
        }   
    
    
    console.log(maxValue, maxRepeat);

}

console.log(masUsado('auco nsooooooul tor, es con juan, su am igo'));


// let mapa = {
//     nombre: 'Jason',
//     edad: 23,
// }

// console.log(mapa['nombre']);


// let mapa = {
//     a : 1,
//     b : 2,
//     c : 3,
// }

// let mapa = {'a':1 , 'b':2, 'c':3, 'd':4};

// const test = (map) => {

//     for( let a in map){
//         console.log(a);
//     }
// }

// console.log(test(mapa));


