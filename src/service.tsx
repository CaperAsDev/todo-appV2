import { orderTodos } from './utils/utils';
import {
  CreateTaskDTO, Task, TaskStatus, UpdateTask,
} from './models';

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
      id: crypto.randomUUID(),
      createdAt: new Date(),
      status: TaskStatus.ToDo,
      startDate: undefined,
      endDate: undefined,
      objetiveId: crypto.randomUUID(),
    };
    return this.add(newData);
  }

  add(data: Task) {
    const newList = orderTodos([...this.tasks, data]);
    localStorage.setItem(this.itemName, JSON.stringify(newList));
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
    const updatedTasks = orderTodos(this.tasks.map((task) => {
      if (task.id === id) {
        taskUpdated = { ...task, ...changes };
        return taskUpdated;
      }
      return task;
    }));
    localStorage.setItem(this.itemName, JSON.stringify(updatedTasks));
    this.tasks = updatedTasks;
    return { taskUpdated, updatedTasks };
  }
}
