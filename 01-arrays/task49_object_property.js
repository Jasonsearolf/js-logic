
const existePropiedad = (objecto, propiedad) => {

    if (typeof objecto === 'object'  &&  
        typeof propiedad === 'string' &&
        //hasOwnProperty.call(objecto, propiedad)   //Otra opción
        objecto.hasOwnProperty(propiedad)
        ){
        
        return true;              
    }else {
        return false;
    }
}

let user = {

    nombre : 'juan',
    apellido : 'Lopez',
    web: 'google.com',

};


console.log(existePropiedad(user, 'web' ));