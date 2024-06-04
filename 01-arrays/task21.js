

const extraerTexto = (text, limit) => {
    if(typeof text === 'string' && typeof limit === 'number'){
        return text.substring(0, limit)
    }else{
        return 'introduce bien los datos!!'
    }
}

console.log(extraerTexto('12321312', 4));