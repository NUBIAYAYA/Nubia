
console.log ('Logica Inicio Sesion');

const usuario = 'Admin'
const clave = '1234'
const frutas=['Manzana','Pera','sandia']

function pruebaBoton(){
    let user = document.getElementById ('user').value.toLocaleUpperCase()
    let pw = document.getElementById ('pw').value

    if ( usuario.toLocaleUpperCase()==user && clave==pw){
        setUser()
        window.open('local_Storage.html')
    // console.log ('Ingreso correcto')
    }else{
        contarIntentos()
        console.log('error en credenciales');


    function bloquearCuenta(){

    }

    let contador= 0
    function contarIntentos(){
        contador ++
        console.log ('contador'${contador});

    }
    }
    function setUser(){
        localStorage.setItem('Usuario',usuario)

    }
   
}
function imprimirArreglo() {
    let posicion= document.getElementById('arrayPosicion').value
    console.log(localStorage.getItem('AgregarFruta'));
    if(posicion>=frutas.length){
        console.log('posicion no valida');
        limpiar()
        
    }else{

    } console.log(frutas[posicion]);
    
}
function limpiar() {
    document.getElementById('arrayPosicion').value= ''
    document.getElementById('arrayPosicion').focus()

}
function AgregarFruta(){
    let NombreFruta = document.getElementById('NombreFruta'). value.toLocaleUpperCase()
    NombreFruta=NombreFruta.trim()
    if(NombreFruta.trim()!==''){
    frutas.push(NombreFruta)
    guardarStorage(frutas)
    console.log('Se Agrega la fruta ${NombreFruta}')
    document.getElementById('NombreFruta').focus()
    }else{
        console.log('Nombre no Valido')
    }


}
function EliminarFruta(){
    let posicion= document.getElementById('arrayPosicion').value
    frutas.splice(posicion,1)
    console.log ('Eliminar'+ frutas);

    }
    function guardarStorage(arreglo){
    localStorage.setItem('Arreglo Frutas', arreglo)
    console.log ('Guardado en storage');
    }