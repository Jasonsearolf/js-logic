

const fibonacci = (numero) => {


    let arr = [0,1];

    for(let i = 2; i <= numero; i++){
        
        arr.push(arr[i-1] + arr[i-2]);
    }

    return [arr, arr[numero]];
}



console.log('serie completa: ' + fibonacci(10)[0]);
console.log('numero final: ' + fibonacci(10)[1]);

// 0 1 1 2 3 5