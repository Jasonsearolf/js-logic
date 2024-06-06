

const substrings = (palabra) => {

    let substrings = [];

    for(let letra in palabra){
        
        let comienzo = parseInt(letra);

        console.log(comienzo);

        for (let i = 0; i <= palabra.length - comienzo; i++) {
            
            let final = parseInt(i) + parseInt(comienzo);

            substrings.push(palabra.substring(comienzo, final));
            
        }
    }

    return substrings.filter(palabra => palabra.length > 1);
}

console.log(substrings("hola"));bsssss