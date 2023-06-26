import { useContext } from 'react';
import TodoItem from '../atoms/TodoItem';
import { TaskContext } from '../../Contexts/TaskContext';

export default function TodoList() {

  return (
    <>
      {
      searchedTodo.map((todo) => (
        <TodoItem
          idSelected={idSelected}
          key={todo.id}
          id={todo.id}
          setIdSelected={setIdSelected}
          title={todo.title}
          status={todo.status}
        />
      ))
      }
    </>
  );
}
