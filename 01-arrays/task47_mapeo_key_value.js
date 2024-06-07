// Resolución hecha sin saber a que se referia el ejercicio.(FUNCIONA)
// const aficiones = (arr) => {

//     let media = 0;
//     let comunes = [];

//         for(let prop in arr){
//         media += arr[prop];
            
//         }

//     media = media/Object.keys(arr).length;

//     for(let i = 0; i < Object.keys(arr).length; i++){
//         if(arr[Object.keys(arr)[i]] >= media){
//             comunes.push(Object.keys(arr)[i]);
//         }
//     }

//     return comunes;
// }

// console.log(aficiones({
//     informatica: 6,
//     cine: 7,
//     futbol: 2,
//     videojuegos: 1,
// }));


const aficiones = (arrObj) => {

    
    let mapeo = {};
    for(let prop of arrObj){
        // console.log(prop.aficiones);
        for(let aficion of prop.aficiones){
        // console.log(aficion);
            if(!mapeo[aficion]){
                mapeo[aficion] = 1;
            }else{
                mapeo[aficion]++
            }
       }
        
        
    }     
    
    return mapeo;

}


const usuarios = [
    {nombre: 'Juan', aficiones: ['videojuegos', 'informatica', 'futbol']},
    {nombre: 'Luis', aficiones: ['informatica', 'futbol']},
    {nombre: 'Paco', aficiones: ['cine', 'videojuegos', 'tenis']},
    {nombre: 'Maria', aficiones: ['videojuegos', 'futbol']},
];

console.log(aficiones(usuarios));