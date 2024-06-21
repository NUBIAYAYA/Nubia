
console.log ('Logica Conectada');

const usuario = 'Admin'
const clave = '1234'
const frutas=['Manzana','Pera','sandia']

function pruebaBoton(){
    let user = document.getElementById ('user').value
    let pw = document.getElementById ('pw').value
    if ( usuario==user && clave==pw){
    console.log ('Ingreso correcto')
    }else{
        console.log('error en credenciales');
    }
   
}
function imprimirArreglo() {
    let posicion= document.getElementById('arrayPosicion').value
    
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
    const NombreFruta = document.getElementById('NombreFruta'). value
    frutas.push(NombreFruta)
    console.log('Se Agrega la fruta ${NombreFruta}')
    document.getElementById('NombreFruta').focus

}
function EliminarFruta(){
    console.log ('Eliminar');

    }