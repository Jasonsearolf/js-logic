
const media = (arr) => {

    // let suma = 0;

    
    // for (let i = 0; i < arr.length; i++) {
    //     suma += arr[i];
    // }

    // arr.forEach(element => {
    //     suma += element;
    // });

    let suma = arr.reduce((valorAcumulado, currentValue) => {
        return valorAcumulado + currentValue;
    })

    let media = suma / arr.length
    

    return media;
}

console.log(media([1,2,3,4,5]));