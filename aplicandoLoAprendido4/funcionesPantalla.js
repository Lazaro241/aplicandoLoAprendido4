export function escribirEnPantalla (cadena){
    return console.log(`${cadena}`);
}
export function ingresoInvalido (){
    escribirEnPantalla("Opción ingresada no válida.");
}