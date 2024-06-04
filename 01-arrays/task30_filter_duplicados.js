

const duplicados = (elementos) => {

    elementos = elementos.filter( elemento => {

       return typeof elemento === 'number';
    });
    
    let sin_duplicados = new Set (elementos);

    return Array.from(sin_duplicados)

}


console.log(duplicados(['uno','dos',1,0,2,2,3,4,5,5,5,6,7,8]));

