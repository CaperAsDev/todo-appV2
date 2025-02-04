import { useContext } from 'react';
import { TaskContext } from '../../Contexts/TaskContext';
import TaskDetails from '../molecules/TaskDetails';
import TodoList from '../molecules/TodoList';
import HeaderMessage from '../atoms/HeaderMessage';

export default function TaskManager() {
  const {
    noCoincidence,
  } = useContext(TaskContext);

  return (
    <section className="interface">
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
    </section>
  );
}
