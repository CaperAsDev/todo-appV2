import { Task, TaskImportance, TaskStatus } from '../models';

export const todoItems: Task[] = [
  {
    id: 'a',
    title: 'Animes del dia',
    status: TaskStatus.ToDo,
    importance: TaskImportance.IWouldLike,
    description: 'Ver los animes del dia: Konosuba, Tate no yuusha',
    startDate: new Date(),
    endDate: null,
    objetiveId: 'khfjfjf',
  },
  {
    id: 'b',
    title: 'Estudiar Japones',
    status: TaskStatus.InProgress,
    importance: TaskImportance.IWouldLike,
    description: 'Aprenderse los siguientes 5 hiragana',
    startDate: new Date(),
    endDate: null,
    objetiveId: 'khfjfjf',
  },
  {
    id: 'c',
    title: 'Dibujar',
    status: TaskStatus.Completed,
    importance: TaskImportance.IWouldLike,
    description: 'dibujar caritas, formas y demas',
    startDate: new Date(),
    endDate: null,
    objetiveId: 'khfjfjf',
  },
  {
    id: 'd',
    title: 'Leer',
    status: TaskStatus.Paused,
    importance: TaskImportance.IWouldLike,
    description: 'Ver los animes del dia: Konosuba, Tate no yuusha',
    startDate: new Date(),
    endDate: null,
    objetiveId: 'khfjfjf',
  },
];

export function orderTodos(todos: Task[]): Task[] {
  const completedTodos = todos.filter((item) => item.status === TaskStatus.Completed);
  const inProgressTodos = todos.filter((item) => item.status === TaskStatus.InProgress);
  const toStartTodos = todos.filter((item) => item.status === TaskStatus.ToDo);
  const pausedTodos = todos.filter((item) => item.status === TaskStatus.Paused);
  const canceledTodos = todos.filter((item) => item.status === TaskStatus.Canceled);
  const orderedList = [
    ...inProgressTodos,
    ...pausedTodos,
    ...toStartTodos,
    ...completedTodos,
    ...canceledTodos,
  ];
  return orderedList;
}
