

const suspenso = (arr) => {

    let aprobados = 0;
    let suspensos = 0;

    for(let alumno of arr){
        if(alumno[1] >= 5){
            aprobados++;
        }else{
            suspensos++;
        }
    }
    
    return{
        'aprobados': aprobados,
        'suspensos': suspensos
    }
}


console.log(suspenso([

    ['Jose' , 1],
    ['Pedro', 5],
    ['Juan' , 10],
    ['Ana'  , 7],
]));