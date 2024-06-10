
console.log ('Logica Conectada')
console.log ('Hola')

const Usuario ='Admin'
const Contraseña = '1234'

function pruebaBoton () {
let user = document.getElementById(user)

let pw = document.getElementById(pw).value
console.log ('Usuario$(user) Contraseña ${pw}')
if (Usuario== user && Contraseña==pw){
    window.open('calculadora.html')
    document.getElementById('Bienvenida').innerHTML('Bienvenido ${user}')
}else {
    console.log ('error de credenciales');
}

}