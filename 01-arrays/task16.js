const find_vocales = (text) =>{

    let vocals = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;

    for(let word of text){
        
        for( let vocal of vocals){
            if( word === vocal){
                counter++
            }
        }
    }

    return counter;

}

console.log(find_vocales('hola soy juan'));