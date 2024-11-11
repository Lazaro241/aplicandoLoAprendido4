export function comprobarTitulo(titulo){
    return (titulo==="Sin titulo" || titulo==="");
}
export function comprobarDificultad(dificultad){
    return ((isNaN(dificultad)) || (dificultad!=1 && dificultad!=2 && dificultad!=3));
}