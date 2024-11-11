import { escribirEnPantalla, ingresoInvalido } from "./funcionesPantalla.js";
import { comprobarDificultad} from "./funcionesControladoras.js";
import promptSync from "prompt-sync";
export function ingresarPorTeclado(){
    const teclado = promptSync();
    return teclado(">");
}
export function ingresarTitulo(){
    escribirEnPantalla("Ingrese un titulo para la tarea.");
    const titulo = ingresarPorTeclado();
    return titulo;
}
export function ingresarDescripcion(){
    escribirEnPantalla("Ingrese una descripción para la tarea.");
    const descripcion = ingresarPorTeclado();
    return descripcion;
}
export function ingresarDificultad(){
    escribirEnPantalla("Ingrese una dificultad para la tarea(1, 2, o 3)");
    const dificultad =Number(ingresarPorTeclado());
    if(comprobarDificultad(dificultad)){
        ingresoInvalido();
        return ingresarDificultad();
    }
    return dificultad;
}
export function ingresarVencimiento(){
    escribirEnPantalla("Ingrese la fecha de vencimiento (dd/mm/yyyy): ");
    const entrada = this.ingresarPorTeclado();
    // Intentar convertir la entrada en una fecha válida
    const [dia, mes, anio] = entrada.split('/').map(Number); // Convertir a números
    const fechaVencimiento = new Date(anio, mes - 1, dia); // Mes empieza en 0 (Enero)
    // Validar que la fecha sea válida y no anterior a hoy
    if (!isNaN(Number(fechaVencimiento)) && fechaVencimiento >= new Date()){// No permitir fechas anteriores 
        return fechaVencimiento;
    } else {
        //aplicar recursividad para solicitar la fecha nuevamente
        ingresoInvalido();
        return ingresarVencimiento();
    }  
}