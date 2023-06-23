import { orderTodos, todoItems } from './Components/utils';
import { CreateTaskDTO, Task, UpdateTask } from './models';

export interface TaskService {
  updateTask(id: Task['id'], changes: UpdateTask): Task | undefined;
  create(dto: CreateTaskDTO): Task;
  findById(id: Task['id']): Task | undefined;
}

function generarId(longitud: number): string {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let idGenerado = '';
  for (let i = 0; i < longitud; i += 1) {
    const indice = Math.floor(Math.random() * caracteres.length);
    idGenerado += caracteres.charAt(indice);
  }
  return idGenerado;
}

export class TaskMemoryService implements TaskService {
  public initialTasks: Task[] = [];

  public setTasks: React.Dispatch<React.SetStateAction<Task[]>>;

  constructor(
    initialTasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
    public itemName: string,
  ) {
    this.initialTasks = initialTasks;
    this.setTasks = setTasks;
  }

  create(data: CreateTaskDTO): Task {
    const newData = {
      ...data,
      id: generarId(8),
    };
    return this.add(newData);
  }

  add(data: Task) {
    const newList = [...this.initialTasks, data];
    localStorage.setItem(this.itemName, JSON.stringify(orderTodos(newList)));
    this.setTasks((prevdata) => [data, ...prevdata]);
    return data;
  }

  static getAllTasks(itemName: string): Task[] {
    console.log('Asking Data');

    const jsonData = localStorage.getItem(itemName);
    let data: Task[];
    if (!jsonData) {
      localStorage.setItem(itemName, JSON.stringify(todoItems));
      data = [];
    } else {
      data = JSON.parse(jsonData);
    }
    return data;
  }

  findById(id: string): Task | undefined {
    return this.initialTasks.find((task) => task.id === id);
  }

  updateTask(id: string, changes: UpdateTask): Task | undefined {
    const updatedTasks = this.initialTasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...changes };
      }
      return task;
    });
    localStorage.setItem(this.itemName, JSON.stringify(orderTodos(updatedTasks)));
    this.setTasks(orderTodos(updatedTasks));
    return updatedTasks.find((task) => task.id === id);
  }
}
