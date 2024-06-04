//OPCION OPTIMIZADA

const limpiarTexto = (text) => {
    
    
    return text.replace(/[^\w]/gi, '')
                        .toLowerCase()
                        .split(' ')
                        .sort()
                        .join();
    // console.log('esto es:' + cleanText);
    // return cleanText;
}

const anagrama2 = (text1, text2) => {


    return limpiarTexto(text1) === limpiarTexto(text2);

}


console.log(anagrama2('victor', 'sergio'));

// MI VERSION
// const anagrama = (text1, text2) => {

//     let newText1 = text1.toLowerCase().replace(/[^\w]/gi, '');
//     let newText2 = text2.toLowerCase().replace(/[^\w]/gi, '');
//     let validador = {};
//     let resultado = '';
    
//     console.log(newText1,newText2);

//     for( let word1 of newText1){
        
//         if(!validador[word1]){
//             validador[word1] = 1;
//         }else{
//             validador[word1]++;
//         }
//     }

//     for( let word2 of newText2){
        
//         if(!validador[word2]){
//             validador[word2] = 1;
//         }else{
//             validador[word2]++;
//         }
//     }

//    console.log(validador);
    
//    for(let i in validador){
        
//         if(validador[i] % 2 === 0 ){
//             resultado = ' Es un anagrama'
            
//         }else{
//             resultado = ' No es un anagrama';
//             break;
//         }
        
//     }

//     return resultado
    
// }



// console.log(anagrama('r-eeszr.gi-o', 'ri-e.sezrgo'));