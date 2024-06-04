const firstUpperCaseOG = (text) => {
    let result = '';

    for(let letter in text){
        if(text[letter-1] === ' ' || parseInt(letter) === 0){
            result += text[letter].toUpperCase();
        }else{
            result += text[letter];
        }
    }
    return result
}



const firstUpperCase = (text) => {
    let words = [];
    for(let word of text.split(' ')){
        words.push(word[0].toUpperCase() + word.substring(1));
        console.log(words);
    }

    return words.join(' ')

}



console.log(firstUpperCase('hola soy jason'));


