import * as ingreso from "./funcionesIngreso.js";
import { listaTareas } from "./ListaTareas.js";
import { Tarea } from "./tarea.js";
import { comprobarTitulo } from "./funcionesControladoras.js";
import { escribirEnPantalla, ingresoInvalido } from "./funcionesPantalla.js";
import * as menu from "./funcionesMenu.js";

/*PROCESO DE AGREGAR TAREA */
export function opcionPrincipal1(lista){
    let op;
    const nuevaTarea = new Tarea();
    do{
        menu.menuAgregarUnaTarea();
        op=ingreso.ingresarPorTeclado();
        switch(op){
            case "1":
                nuevaTarea.setTitulo(ingreso.ingresarTitulo());
                break;
            case "2":
                nuevaTarea.setDescripcion(ingreso.ingresarDescripcion());
                break;
            case "3":
                nuevaTarea.setDificultad(ingreso.ingresarDificultad());
                break;
            case "4":
                nuevaTarea.setVencimiento(ingreso.ingresarVencimiento());
                break;
            case "5":
                if(comprobarTitulo(nuevaTarea.getTitulo())){
                    escribirEnPantalla("No puedes agregar una tarea sin modificar el titulo.");
                    op="-1";
                }
                else{
                    escribirEnPantalla("Se agregó la tarea exitosamente.");
                    lista.aniadirTarea(nuevaTarea);
                }
                break;
            case "0":
                escribirEnPantalla("La creación de la tarea se canceló exitosamente.");
                break;
            default:
                ingresoInvalido();
                break;
        }
    }while(op!="0" && op!="5");
}
/*PROCESO VER TAREAS */
export function opcionPrincipal2(lista){
    let op;
    do{
        menu.menuVerMisTareas();
        op=ingreso.ingresarPorTeclado();
        switch(op){
            case "1":
                
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                break;
            case "0":
                break;
            default:
                break;
        }
    }while(op!="0");
}