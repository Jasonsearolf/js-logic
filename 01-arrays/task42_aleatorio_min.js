
const aleatorio = (min, max) => {

    return Math.round(Math.random() * (max - min) + min );
}

console.log(aleatorio(4, 10));