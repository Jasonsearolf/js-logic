
const validEmail = (email) => {

    return  /^[^\s@]+@[^\@]+\.[^\s@]{2,}$/.test(email);

}


console.log(validEmail('angel@email.com'));