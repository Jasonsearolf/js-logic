
const reverseNumber = (n) => {

    const reverse = parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
    return reverse;

}

console.log(reverseNumber(-67));
console.log(typeof reverseNumber(67));