

// mi version
// const oddNumberCounter = (n1, n2) => {
    
//     let arr = [];
//     let counter = 0;
//     for( let i = n1+1; i < n2; i++){     
//         arr.push(i)
//     }

//     for( let a of arr){
//         if(a % 2 !== 0){
//             counter++;
//         }
//     }

//     return counter; 
    
// }


//opcion 2 pero más optimizada y recomendada

const nextOddNumberCounter = (n1, n2) => {

    let contador = 0;
    while( n1 < n2){
        
        n1++;
        if(n1 % 2 !== 0) contador++;
        
    }
    
    return contador;

}


console.log(oddNumberCounter(19, 30));
console.log(nextOddNumberCounter(1, 100));