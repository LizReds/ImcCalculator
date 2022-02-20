class ManejoDatos {
    constructor(){
        this.datosUsuario = [];
    }

    procesarDatos = (evento) => {
        evento.preventDefault();
        this.obtenerDatos();
        this.realizarFormula(this.datosUsuario[this.datosUsuario.length - 1]);
    }

    obtenerDatos(){
        let usuario = {};
        usuario.nombre = document.getElementById("username").value;
        usuario.peso = document.getElementById("userWeight").value;
        usuario.estatura = document.getElementById("userHeight").value;
        this.datosUsuario.push(usuario);
        let usuarioParaGuardar = JSON.stringify(usuario);
        localStorage.setItem('datosDeUsuario', usuarioParaGuardar);
    }

    
    realizarFormula(obj){
        let resultado = +obj.peso / (+obj.estatura * +obj.estatura);
        let mensaje1 = document.getElementById("mensaje1");
        mensaje1.innerHTML = ("El IMC de " + obj.nombre + " es " + resultado.toFixed(1) );
        if ($('#mensaje1').val() !== '' || $('#mensaje1').val() !== undefined){
            $('.messageContainer').show();
            $('#mensaje1').fadeIn(2000, () => {
                $('#mensaje2').fadeIn(2000);
            })
        };
        calculoImc = resultado;
    }


}

class ManejoHtml {
    constructor(){
        
    }

    mostrarResultado(){
        //this.estadoImc(calculoImc);
        let mensaje2 = document.getElementById('mensaje2');
        mensaje2.innerHTML = this.estadoImc(calculoImc);
        console.log(mensajesResultado);
        console.log(calculoImc);
    }

    estadoImc(valorCalculo) {
        if (valorCalculo <= 16) {
            $('.messageContainer').css('background', 'tomato');
            $('#mensaje1').css('color', '#9de49a');
            $('#mensaje2').css('color', '#9de49a');
            return (mensajesResultado.desnutricionSevera)
        }
        else if ((valorCalculo >= 16.1) && (valorCalculo <= 18.4 )) {
            $('.messageContainer').css('background', 'LightSalmon');
            $('#mensaje1').css('color', '#C84B31');
            $('#mensaje2').css('color', '#C84B31');
            return (mensajesResultado.desnutricionModerada)
        }
        else if ((valorCalculo >= 18.5) && (valorCalculo <= 22 )) {
            $('.messageContainer').css('background', 'moccasin');
            $('#mensaje1').css('color', '#C84B31');
            $('#mensaje2').css('color', '#C84B31');
            return (mensajesResultado.bajoPeso)
        }
        else if ((valorCalculo >= 22.1) && (valorCalculo <= 24.9 )) {
            $('.messageContainer').css('background', 'PaleGreen');
            $('#mensaje1').css('color', '#C84B31');
            $('#mensaje2').css('color', '#C84B31');
            return (mensajesResultado.pesoNormal)
        }
        else if ((valorCalculo >= 25) && (valorCalculo <= 29.9 )) {
            $('.messageContainer').css('background', 'moccasin');
            $('#mensaje1').css('color', '#C84B31');
            $('#mensaje2').css('color', '#C84B31');
            return (mensajesResultado.sobrepeso)
        }
        else if ((valorCalculo >= 30) && (valorCalculo <= 34.9 )) {
            $('.messageContainer').css('background', 'LightSalmon');
            $('#mensaje1').css('color', '#C84B31');
            $('#mensaje2').css('color', '#C84B31');
            return (mensajesResultado.obesidadTipo1)
        }
        else if ((valorCalculo >= 35) && (valorCalculo <= 39.9 )) {
            $('.messageContainer').css('background', 'tomato');
            $('#mensaje1').css('color', '#9de49a');
            $('#mensaje2').css('color', '#9de49a');
            return (mensajesResultado.obesidadTipo2)
        }
        else if (valorCalculo >= 40) {
            $('.messageContainer').css('background', 'tomato');
            $('#mensaje1').css('color', '#9de49a');
            $('#mensaje2').css('color', '#9de49a');
            return (mensajesResultado.obesidadTipo3)
        } 
    }

    limpiarFormulario(){
        $('#username').val('');
        $('#userWeight').val('');
        $('#userHeight').val('');
        //Animaciones concatenadas con JQuery
        $('#mensaje1').fadeOut(2000, () => {
            $('#mensaje2').fadeOut(2000, () => {
                $('.messageContainer').slideUp(1000)
                })
            });
        localStorage.removeItem('datosDeUsuario');
    }

    //Incorporar elementos al DOM con JQuery
    crearContenidoExtra(){
        $('.buttonContainer').append('<button id="limpiar">Limpiar</button>');
        //Método para crear respuesta a evento clic con JQuery
        $('#limpiar').on('click', this.limpiarFormulario);
    }
    

}

class ObtenerJson {
    constructor (){
        this.obtenerDatosJson ();
    }
    //Obtener datos de un JSON local 
    obtenerDatosJson(){
    $.get(datosJson, function (response, status){
        console.log(status);
        if(status == 'success'){
            mensajesResultado = response;
        }else{
            console.log('No se pudo recuperar la información');
        }
    });
    };
}

let mensajesResultado;
let datosJson = './msg.json';
let calculoImc;

let obtenerJson1 = new ObtenerJson;
//console.log(calculoImc)
let contenidosHtml = new ManejoHtml;
let calculoUsuario1 = new ManejoDatos;
document.getElementById("form").addEventListener("submit", calculoUsuario1.procesarDatos);
contenidosHtml.crearContenidoExtra();
contenidosHtml.mostrarResultado();
//let mensaje2 = document.getElementById('mensaje2');
$('.messageContainer').hide();