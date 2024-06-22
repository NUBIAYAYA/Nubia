
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
    console.log(localStorage.getItem(arregloFrutas));

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