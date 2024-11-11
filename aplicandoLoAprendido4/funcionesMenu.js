import { escribirEnPantalla } from "./funcionesPantalla.js";

export function menuPrincipal(){
    escribirEnPantalla("Menú de opciones");
    escribirEnPantalla("[1] Agregar tarea.");
    escribirEnPantalla("[2] Ver tarea.");
    escribirEnPantalla("[3] Buscar tarea.");
}
export function menuVerMisTareas(){
    escribirEnPantalla("¿Qué tareas deseas ver?");
    escribirEnPantalla("[1] Todas.");
    escribirEnPantalla("[2] Pendientes.");
    escribirEnPantalla("[3] En curso.");
    escribirEnPantalla("[4] Terminadas.");
    escribirEnPantalla("[0] Volver.");
}
/*export function verListadoDeTareas(arrayTareas:Tarea[]):void{
    arrayTareas.forEach( tarea:Tarea,index:int)=>{
        escribirEnPantalla(`Tarea ${index + 1}: ${tarea}`)
    }
}*/
export function menuAgregarUnaTarea(){
    console.log("Estás creando una nueva tarea.");
    console.log(`[1] Ingresar título`);
    console.log(`[2] Ingresar descripción`);
    console.log(`[3] Ingresar dificultad`);
    console.log(`[4] Ingresar Vencimiento`);
    console.log("[5] Finalizar la creacíon de la tarea.");
    console.log("[0] Cancelar Creación de tarea.");
}