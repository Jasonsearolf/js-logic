const permutation = (secuencia, numero) => {
    
    for(let i = 0; i < numero; i++){
        if(secuencia.indexOf(i+1) < 0){
            console.log(secuencia.indexOf(i+1));
            return false
        }
    }
    return true
} 


console.log(permutation([1,2,3,5,4],5));



