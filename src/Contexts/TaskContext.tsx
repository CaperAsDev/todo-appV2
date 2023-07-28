/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useMemo } from 'react';
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
  updateTask: (id: `${string}-${string}-${string}-${string}-${string}`, changes: UpdateTask) => Task | undefined
  idSelected: string
  taskToRender: Task | undefined
  setIdSelected: React.Dispatch<React.SetStateAction<`${string}-${string}-${string}-${string}-${string}`>>
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
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
  const [idSelected, setIdSelected] = React.useState<Task['id']>('a-a-a-a-a');
  const [openModal, setOpenModal] = React.useState(false);

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
  const taskToRender = useMemo(() => {
    if (!noCoincidence) {
      const index = searchedTodo.findIndex((task) => task.id === idSelected);
      if (index === -1) {
        setIdSelected(searchedTodo[0].id);
        return searchedTodo[0];
      }
      return searchedTodo[index];
    }

    return undefined;
  }, [idSelected, searchedTodo]);
  useEffect(() => {
    if (!noCoincidence) setIdSelected(searchedTodo[0].id);
  }, [searchValue]);
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
      taskToRender,
      setIdSelected,
      openModal,
      setOpenModal,
    }}
    >
      {children}
    </TaskContext.Provider>
  );
}
