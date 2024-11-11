import { listaTareas } from "./ListaTareas";
import { Tarea } from "./tarea";

const xd:listaTareas = new listaTareas()

xd.aniadirTarea(new Tarea())
let tarea = new Tarea();
tarea.setEstado("En curso")
xd.aniadirTarea(tarea);

console.log(xd.filtrarTareasPorEstado("En curso"))