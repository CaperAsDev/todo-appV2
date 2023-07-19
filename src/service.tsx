import { orderTodos } from './utils/utils';
import { CreateTaskDTO, Task, UpdateTask } from './models';

function generarId(longitud: number): string {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let idGenerado = '';
  for (let i = 0; i < longitud; i += 1) {
    const indice = Math.floor(Math.random() * caracteres.length);
    idGenerado += caracteres.charAt(indice);
  }
  return idGenerado;
}
export type TaskMemoryTypes = {
  create: (data: CreateTaskDTO) => {
    data: Task;
    newList: Task[];
  }
  getAllTasks: () => Task[]
  findById: (id: string) => Task | undefined
  updateTask(id: string, changes: UpdateTask): {
    taskUpdated: Task | undefined;
    updatedTasks: Task[];
  }
};

export class TaskMemoryService implements TaskMemoryTypes {
  private tasks: Task[];

  constructor(
    private itemName: string,
  ) {
    this.tasks = this.getAllTasks();
  }

  create(data: CreateTaskDTO):{
    data: Task;
    newList: Task[];
  } {
    const newData = {
      ...data,
      id: generarId(8),
    };
    return this.add(newData);
  }

  add(data: Task) {
    const newList = [...this.tasks, data];
    localStorage.setItem(this.itemName, JSON.stringify(orderTodos(newList)));
    this.tasks = newList;
    return { data, newList };
  }

  getAllTasks(): Task[] {
    const jsonData = localStorage.getItem(this.itemName);
    let data: Task[];
    if (!jsonData) {
      localStorage.setItem(this.itemName, JSON.stringify([]));
      data = [];
    } else {
      data = JSON.parse(jsonData);
    }
    this.tasks = data;
    return this.tasks;
  }

  findById(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, changes: UpdateTask): {
    taskUpdated: Task | undefined;
    updatedTasks: Task[];
  } {
    let taskUpdated;
    const updatedTasks = this.tasks.map((task) => {
      if (task.id === id) {
        taskUpdated = { ...task, ...changes };
        return taskUpdated;
      }
      return task;
    });
    localStorage.setItem(this.itemName, JSON.stringify(orderTodos(updatedTasks)));
    this.tasks = updatedTasks;
    return { taskUpdated, updatedTasks };
  }
}
