
// const replaceString = (number) =>{
    
//     let newNumber = [];
//     let newArr = []

//     for(let i = 1; i<=number; i++){
//         newNumber.push(i);
//     }
    
//     for(let n of newNumber){

//         if( n%3 === 0 && n%5 ===0){
//             n = 'buzzligthyear';
            
//         }else if( n%3 === 0){
//             n = 'buzz';
            
//         }else if(n%5 === 0){
//             n = 'ligthyear';
            
//         }else{
//             n;
//             }
            
//             newArr.push(n);
//     }

//     return newArr;

// }


// console.log(replaceString(15));


// PIDE IMPRIMIR EN CONSOLA CADA ITERACION Y NO GUARDARLO EN UN ARRAY


const buzz = (n) => {
    
    let resultado;

    if( n%3 === 0 && n%5 ===0){
        n = 'buzzligthyear';
        
    }else if( n%3 === 0){
        n = 'buzz';
        
    }else if(n%5 === 0){
        n = 'ligthyear';
        
    }else{
        n;
    }

    return resultado = n;
    
}

const imprimir = (number) =>{
    
    for(let i = 1; i <= number; i++){
        console.log(buzz(i));
    }

}


imprimir(15);