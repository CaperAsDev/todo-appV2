/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { CreateTaskDTO, Task, UpdateTask } from '../models';
import { TaskMemoryService, TaskMemoryTypes } from '../service';

export default function useTasks() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [empty, setEmpty] = React.useState(true);

  const taskService:TaskMemoryTypes = new TaskMemoryService('MLM_Tas');

  const [tasks, setTasks] = React.useState<Array<Task>>([]);

  useEffect(() => {
    setLoading(true);
    let initialstate:Task[];
    setTimeout(() => {
      try {
        initialstate = taskService.getAllTasks();
        setTasks(initialstate);
        if (tasks.length >= 1) { setEmpty(false); }
      } catch (e) {
        setError(true);
      }
    }, 2000);
  }, []);

  const addTask = (newTask: CreateTaskDTO):Task => {
    const { data, newList } = taskService.create(newTask);
    setTasks(newList);
    return data;
  };

  const updateTask = (id: Task['id'], changes: UpdateTask) => {
    const { taskUpdated, updatedTasks } = taskService.updateTask(id, changes);
    setTasks(updatedTasks);
    return taskUpdated;
  };

  return ({
    loading,
    error,
    empty,
    tasks,
    addTask,
    updateTask,
  });
}
