

const mayorMenor = (a,b) => {

    if((a - b) < 0){
        return `${b} es mayor y ${a} es menor`;
    }else if((a - b) > 0){
        return `${a} es mayor y ${b} es menor`;
    }else{
        return `son iguales`;
    }

}

console.log(mayorMenor(-123, -123));