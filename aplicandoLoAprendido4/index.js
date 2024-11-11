import { listaTareas } from "./ListaTareas.js";
import { Tarea } from "./tarea.js";

const xd = new listaTareas()

xd.aniadirTarea(new Tarea())
let tarea = new Tarea();
tarea.setEstado("En curso")
xd.aniadirTarea(tarea);

console.log(xd.filtrarTareasPorEstado("En curso"))