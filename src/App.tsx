import './App.css';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoCreateButton from './Components/TodoCreateButton';

interface ItemTodoList {
  text: string;
  completed: boolean;
}

const todoItems: ItemTodoList[] = [
  { text: 'Ver los animes del dia', completed: false },
  { text: 'Ver minimo una clase en Platzi', completed: true },
  { text: 'Hacer un dibujo', completed: false },
  { text: 'Dejar ok el juego de skull girls', completed: true },
];
function App() {
  return (
    <>
      <TodoCounter completed={2} total={5} />
      <TodoSearch />
      <TodoList>
        {todoItems.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <TodoCreateButton />
    </>
  );
}

export default App;
