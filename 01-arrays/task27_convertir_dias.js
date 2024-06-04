
const convertDias = (totaldias) => {
        
    let anios = Math.floor(totaldias/365);
        
    let dias_restantes = totaldias%365;

    let meses = Math.floor(dias_restantes/30);
        
    dias_restantes = dias_restantes%30;

          
    return `Equilave a ${anios} años, ${meses} meses y ${dias_restantes} días`;
}

console.log(convertDias(930));