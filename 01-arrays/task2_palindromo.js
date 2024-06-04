


const palindromo = (text) => {

    // console.log(text.split(''));
    
    let reverse = ([...text]).reverse().join('');
    
    return text === reverse;

    
}

