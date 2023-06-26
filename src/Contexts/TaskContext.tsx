/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { CreateTaskDTO, Task, UpdateTask } from '../models';
import useTasks from './Initializer';

type TaskContextProps = {
  error: boolean
  loading: boolean
  empty: boolean
  setSearchValue:React.Dispatch<React.SetStateAction<string>>
  searchValue:string
  tasks:Task[]
  searchedTodo: Task[]
  noCoincidence: boolean
  addTask: (newTask: CreateTaskDTO) => Task
  updateTask: (id: string, changes: UpdateTask) => Task | undefined
  idSelected: string
  firstTask: Task
};
type TaskProviderProps = {
  children: JSX.Element
};

export const TaskContext = React.createContext({} as TaskContextProps);

export function TaskProvider({ children }: TaskProviderProps) {
  const {
    addTask, empty, error, loading, updateTask, tasks,
  } = useTasks();
  const [searchValue, setSearchValue] = React.useState('');
  const searchedTodo = tasks
    .filter((task) => {
      const descriptionTxt = task.description.toLowerCase().trim();
      const titleTxt = task.title.toLowerCase().trim();
      const searchTxt = searchValue.toLowerCase().trim();

      const isInTitle = titleTxt.includes(searchTxt);
      const isInDescription = descriptionTxt.includes(searchTxt);

      return (
        isInTitle || isInDescription
      );
    });

  const noCoincidence = searchedTodo.length === 0;
  let indexTask = -1;
  let firstTask = searchedTodo[indexTask];
  const [idSelected, setIdSelected] = React.useState<Task['id']>('');

  if (!noCoincidence) {
    indexTask = 0;
    firstTask = searchedTodo[indexTask];
    setIdSelected(firstTask.id);
  }

  return (
    <TaskContext.Provider value={{
      loading,
      error,
      empty,
      setSearchValue,
      searchValue,
      tasks,
      addTask,
      updateTask,
      searchedTodo,
      noCoincidence,
      idSelected,
      firstTask,
    }}
    >
      {children}
    </TaskContext.Provider>
  );
}
