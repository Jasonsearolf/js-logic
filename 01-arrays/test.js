
const media = (arr) => {

    let suma = 0;
    for(let i = 1; i <= arr.length; i++){

        suma += arr[i] + arr[i-1];

    }
    
    return suma;
}

console.log(media([1,2,3,4]));