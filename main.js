class Datos {
    constructor(){
        this.DatosUsuario = [];
    }

    obtenerDatos(id, val){
        let datoObtenido = document.getElementById(id);
        //Esto se cambia cuando se obtenga la información con eventos
        datoObtenido.value = val;
        if(datoObtenido == +datoObtenido){
        datoObtenido = parseFloat(datoObtenido);
        }
        this.DatosUsuario.push(datoObtenido)
    }

    realizarFormula(arr){
        let resultado = arr[1] / (arr[2] * arr[2]);
        console.log ("El IMC de " + arr[0] + " es " + resultado );
        return resultado
    }
}


const mensajesResultado = {
    desnutricionSevera: "Su IMC indica desnutrición severa. Consulte a su médico.",
    desnutricionModerada: "Su IMC indica desnutrición moderada. Consulte a su médico.",
    bajoPeso: "Su IMC indica bajo peso. Consulte a su médico.",
    pesoNormal: "¡Felicitaciones! Su IMC indica que se encuentra dentro del peso normal.",
    sobrepeso: "Su IMC indica sobrepeso. Consulte a su médico.",
    obesidadTipo1:"Su IMC indica obesidad tipo I. Consulte a su médico.",
    obesidadTipo2:"Su IMC indica obesidad tipo II. Consulte a su médico.",
    obesidadTipo3: "Su IMC indica obesidad tipo III. Consulte a su médico.",
}

function estadoImc(valorCalculo) {
    if (valorCalculo <= 16) {
        return (mensajesResultado.desnutricionSevera)
    }
    else if ((valorCalculo >= 16.1) && (valorCalculo <= 18.4 )) {
        return (mensajesResultado.desnutricionModerada)
    }
    else if ((valorCalculo >= 18.5) && (valorCalculo <= 22 )) {
        return (mensajesResultado.bajoPeso)
    }
    else if ((valorCalculo >= 22.1) && (valorCalculo <= 24.9 )) {
        return (mensajesResultado.pesoNormal)
    }
    
    else if ((valorCalculo >= 25) && (valorCalculo <= 29.9 )) {
        return (mensajesResultado.sobrepeso)
    }
    
    else if ((valorCalculo >= 30) && (valorCalculo <= 34.9 )) {
        return (mensajesResultado.obesidadTipo1)
    }
    
    else if ((valorCalculo >= 35) && (valorCalculo <= 39.9 )) {
        return (mensajesResultado.obesidadTipo2)
    }
    
    else if (valorCalculo >= 40) {
        return (mensajesResultado.obesidadTipo3)
    } 
}


let calculoImc
let usuario1 = new Datos;
usuario1.obtenerDatos("username", "Ricardo");
usuario1.obtenerDatos("userWeight", "85.7");
usuario1.obtenerDatos("userHeight", "1.76");
calculoImc = usuario1.realizarFormula(usuario1.DatosUsuario)

console.log(estadoImc(calculoImc))
