document.addEventListener('DOMContentLoaded', function() {

let nombre

let nombreLS = localStorage.getItem('nombre')

if (nombreLS) {

    nombre = nombreLS
    let saludo1 = document.createElement('div')
    saludo1.innerHTML = '<h3 style="background-color: lightgrey">Bienvenido nuevamente ' + nombre + '!</h3><br><h4 style="background-color: lightgrey">Que bueno que estés por acá.</h4>'

    let divsaludo = document.getElementById('saludos')
    divsaludo.append(saludo1)

} else {
        nombre = prompt("Hola! ¿Cómo es tu nombre?")
        if (nombre != '') {

        let saludo1 = document.createElement('div')
        saludo1.innerHTML = '<h3 style="background-color: lightgrey">Bienvenido ' + nombre + '!</h3><br><h4 style="background-color: lightgrey">Que bueno que estés por acá.</h4>'

        let divsaludo = document.getElementById('saludos')
        divsaludo.append(saludo1)

        console.log("Nos visita por primera vez " + nombre)
        localStorage.setItem("nombre", nombre)
        }

        else if(nombre === '') {
        nombre = prompt("Aún no completaste tu nombre, por favor escríbelo para ver el saludo personalizado, o verás el saludo por defecto!")
        
        let saludo1 = document.createElement('div')
        saludo1.innerHTML = '<h3 style="background-color: lightgrey">Bienvenido ' + nombre + '!</h3><br><h4 style="background-color: lightgrey">Que bueno que estés por acá.</h4>'

        let divsaludo = document.getElementById('saludos')
        divsaludo.append(saludo1)

        console.log("Nos visita por primera vez " + nombre)
        localStorage.setItem("nombre", nombre)
        }
    }
}, false);