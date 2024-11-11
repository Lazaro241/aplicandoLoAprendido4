import { Tarea } from "./tarea.js";
export class listaTareas{
    #tareas;
    constructor(){
        this.#tareas=[];
    }
    aniadirTarea(nuevaTarea){
        this.#tareas.push(nuevaTarea);
    }
    esVacia(){
        return (this.#tareas.length===0);
    }
    ordenarTareas(){
        this.#tareas.sort((a, b) => {
            let tituloA = a.getTitulo().toLowerCase();
            let tituloB = b.getTitulo().toLowerCase();
            if (tituloA < tituloB) return -1;
            if (tituloA > tituloB) return 1;
            return 0;
        });
    }
    filtrarTareasPorEstado(estado){
        if(estado !== 'Todas'){
            return this.#tareas
            .map((tarea, i) => ({ tarea, indice: i }))  // Crea un objeto temporal con tarea e índice
            .filter(({ tarea }) => tarea.getEstado() === estado)  // Filtra por el estado
            .map(({ indice }) => indice);  // Extrae solo los índices
        } else {
            return this.#tareas;
        }
    }
}