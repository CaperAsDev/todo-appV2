import { useContext } from 'react';
import TodoItem from '../atoms/TodoItem';
import { TaskContext } from '../../Contexts/TaskContext';

export default function TodoList() {
  const { searchedTodo } = useContext(TaskContext);
  return (
    <div className="tasks-list">
      {
      searchedTodo.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          status={todo.status}
        />
      ))
      }
    </div>
  );
}
