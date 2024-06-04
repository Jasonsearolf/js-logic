// function reloj (){
//     setInterval(()=>{
//         const fecha = new Date();
//         const hora = fecha.getHours();
//         const minutos = fecha.getMinutes();
//         const segundos = fecha.getSeconds();
//         console.log(`${hora}:${minutos}:${segundos}`), 1000
//     },1000);
// }

// reloj();

class Reloj {
    constructor(){
        this.fecha = new Date();
        this.segundos = this.fecha.getSeconds();
        this.minutos = this.fecha.getMinutes();
        this.horas = this.fecha.getHours();
    }

    actualizar(segundos){
        this.segundos += segundos;
        
        //actualizar segundos
        if(this.segundos >= 60){
            this.segundos = 0;
            this.minutos++
        }
        //actualizar minutos
        if(this.minutos >= 60){
            this.minutos = 0;
            this.horas++
        }
        //actualizar horas
        if(this.horas >= 24){
            this.horas = 0;
        }

    }
    
    mostrar(){
        this.actualizar(1);
        console.log(`${this.horas}:${this.minutos}:${this.segundos}`);
    }

    encender(){
        setInterval(() => {
            this.mostrar();
        }, 1000);
    }

}


let mi_reloj = new Reloj();

mi_reloj.encender();