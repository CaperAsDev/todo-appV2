import React from 'react';
import { TaskMemoryService } from '../service';
import { Task } from '../models';

type TaskContextProps = {
  error: boolean
  loading: boolean
  setSearchValue:React.Dispatch<React.SetStateAction<string>>
  searchValue:string
  tasks:Task[]
  searchedTodo:Task[]
  idSelected: string
  setIdSelected:React.Dispatch<React.SetStateAction<string>>
  indexTask: number
  taskService: TaskMemoryService
};
export const TaskContext = React.createContext({} as TaskContextProps);
type TaskProviderProps = {
  children: JSX.Element
};
export function TaskProvider({ children }: TaskProviderProps) {
  const initialState = TaskMemoryService.getAllTasks('MLM_Tas');

  const [tasks, setTasks] = React.useState<Array<Task>>(initialState);
  const taskService = new TaskMemoryService(tasks, setTasks, 'MLM_Tas');

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState(' ');

  const searchedTodo = tasks
    .filter((todo) => {
      const descriptionTxt = todo.description.toLowerCase();
      const titleTxt = todo.title.toLowerCase();
      const searchTxt = searchValue.toLowerCase();
      return (
        descriptionTxt.includes(searchTxt)
      || titleTxt.includes(searchTxt));
    });

  const [idSelected, setIdSelected] = React.useState<Task['id']>(tasks[0]?.id);
  const indexTask = tasks.findIndex((task) => task.id === idSelected);

  return (
    <TaskContext.Provider value={{
      loading,
      error,
      setSearchValue,
      searchValue,
      tasks,
      searchedTodo,
      idSelected,
      setIdSelected,
      indexTask,
      taskService,
    }}
    >
      {children}
    </TaskContext.Provider>
  );
}
