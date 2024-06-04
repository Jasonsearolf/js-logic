

const historial = [
    {
        titulo: 'Spiderman',
        director: 'Peter parker',
        vista: true,
    },
    {
        titulo: 'Inglourius Bastards',
        director: 'Tarantino',
        vista: true,
    },
    {
        titulo: 'Star Wars',
        director: 'Steven Spielberg',
        vista: false,
    },
    {
        titulo: 'Las Sirenita',
        director: 'Disney',
        vista: false,
    }
]



let pelisVistas = [];
let pelisNoVistas = [];

const misPeliculas = (historial) => {

    for(let i = 0; i <= historial.length -1; i++){
        if(historial[i].vista === true){
            pelisVistas.push(historial[i]); 
        }else{
            pelisNoVistas.push(historial[i]);
        }
    }

    return pelisVistas, pelisNoVistas;
}

const imprimirResultado = (vistas, noVistas) => {

    for( let vista of vistas){

        console.log(`Ya has visto ${vista.titulo} de ${vista.director}`);
        
    }
    
    for(let noVista of noVistas){
        
        console.log(`Aún no has visto ${noVista.titulo} de ${noVista.director}`);
        
    }

}


console.log(misPeliculas(historial));

imprimirResultado(pelisVistas, pelisNoVistas)