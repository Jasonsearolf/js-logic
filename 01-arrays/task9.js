
//Mi solucion
const findArray = (arr1, arr2) => {

    let newArr= [];
    for( let a1 of arr1 ){
        if( arr2.includes(a1)){
            newArr.push(a1)
        }
    }

    return newArr;

}

// Solucion utilizando método filter


const findArray2 = (arr1, arr2) => {

    let filtrado = arr1.filter( e => arr2.includes(e))

    return filtrado;

}



console.log( findArray([1,3,4,5,7], [3,4,7,6,9]) );
console.log( findArray2([1,3,4,5,7, 'victor'], [3,4,7,6,9, 'victor']) );