function datosNumeros (mensaje){
    let datoTexto = prompt (mensaje);
    datoDecimal = parseFloat(datoTexto);
    return datoDecimal;
}

function resultadoFormula (nombre, peso, estatura) {
    let resultado = peso / (estatura * estatura);
    console.log ("El IMC de " + nombre + " es " + resultado );
    return resultado
}

let mensajesResultado = {
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

const pedirDatos = ["Ingrese su nombre","Ingrese su peso en kg", "Ingrese su estatura en metros"];
let datosUsuario = [];

for (let i = 0; i <= 2; i++) {
    let datoRecibido;
    
    if (i == 0) {
        datoRecibido = prompt (pedirDatos[i])
    }
    else {
        datoRecibido = datosNumeros(pedirDatos[i])
    }
    datosUsuario.push (datoRecibido)
}

let calculoImc = resultadoFormula (datosUsuario[0], datosUsuario [1], datosUsuario[2]);

console.log (estadoImc (calculoImc))







