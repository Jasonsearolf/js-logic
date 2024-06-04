
const dividedArray = (arr, divisor) => {

    let arreglos = [];

    
    for(let a of arr){
        
        let ultimo = arreglos[arreglos.length - 1];
        if(!ultimo || ultimo.length === divisor ){
            arreglos.push([a]);
        }else{
            ultimo.push(a);
        }

        // console.log(`esto es ${arreglos}`);

    }
    return arreglos;
}

console.log(dividedArray([8,2,1,1,5], 2));

