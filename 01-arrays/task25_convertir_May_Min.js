

const convert = (text) => {

    let _mayus = 0;
    let _minus = 0;
    let result = '';

    for(let i of text){
        if(/[A-Z]/.test(i))
        // if(i === i.toUpperCase())
        {
            _mayus++;
        }else{
            _minus++;
        }
    }

    if(_mayus > _minus){
        result = text.toUpperCase();
    }else{
        result = text.toLowerCase();
    }

    return result;
}


console.log(convert('MARCO polo'));