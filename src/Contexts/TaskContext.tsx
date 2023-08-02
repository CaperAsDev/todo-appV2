/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useMemo } from 'react';
import { Task, TaskContextProps } from '../models';
import useTasks from './Initializer';

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
    }}
    >
      {children}
    </TaskContext.Provider>
  );
}
