import React from 'react';
import { Task, TaskStatus } from '../models';

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

export const renderTextWithLineBreaks = (text:string) => {
  const lines = text.split('\n');
  return lines.map((line, index) => (
    <React.Fragment key={line}>
      {line}
      {index !== lines.length - 1 && <br />}
    </React.Fragment>
  ));
};
