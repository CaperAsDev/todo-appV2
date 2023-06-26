import React from 'react';
import { TaskContext } from '../../Contexts/TaskContext';
import TodoCreateButton from '../atoms/TodoCreateButton';
import TaskDetails from '../molecules/TaskDetails';
import TodoList from '../molecules/TodoList';
import HeaderMessage from '../atoms/HeaderMessage';

export default function TaskManager() {
  const {
    noCoincidence,
  } = React.useContext(TaskContext);

  return (
    <div className="interface">
      <HeaderMessage />
      {
        !noCoincidence
        && (
          <div className="tasks">
            <TodoList />
            <TaskDetails />
          </div>
        )
      }
      <TodoCreateButton />
    </div>
  );
}
