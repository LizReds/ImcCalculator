class Datos {
    constructor(){
        this.datosUsuario = [];
    }

    procesarDatos = (evento) => {
        evento.preventDefault();
        this.obtenerDatos();
        calculoImc = this.realizarFormula(this.datosUsuario[0]);
        this.estadoImc(calculoImc);
        mensaje2.innerHTML = this.estadoImc(calculoImc);
    }

    obtenerDatos(){
        let usuario = {}
        usuario.nombre = document.getElementById("username").value;
        usuario.peso = document.getElementById("userWeight").value;
        usuario.estatura = document.getElementById("userHeight").value;
        this.datosUsuario.push(usuario);
    }

    realizarFormula(obj){
        let resultado = +obj.peso / (+obj.estatura * +obj.estatura);
        let mensaje1 = document.getElementById("mensaje1"); 
        mensaje1.innerHTML = ("El IMC de " + obj.nombre + " es " + resultado.toFixed(1) );
        if ($('#mensaje1').val() !== '' || $('#mensaje1').val() !== undefined){
            $('.messageContainer').show(); 
        };
        return resultado
    }

    estadoImc(valorCalculo) {
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


let calculoImc;
let usuario1 = new Datos;

document.getElementById("form").addEventListener("submit", usuario1.procesarDatos);
let mensaje2 = document.getElementById('mensaje2');
$('.messageContainer').hide();