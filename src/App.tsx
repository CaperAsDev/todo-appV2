import TodoList from './Components/TodoList';
import TaskDetails from './Components/TaskDetails';
import TodoItem from './Components/TodoItem';
import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoCreateButton from './Components/TodoCreateButton';
import Header from './Components/header';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import MenuItems, { DataType } from './Components/MenuItems';

enum TaskStatus {
  Completed = 'Completed',
  InProgress = 'InProgress',
  ToDo = 'ToDo',
}
enum TaskImportance {
  Important = 'Important',
  Urgent = 'Urgent',
  Necessary = 'Necessary',
  IWouldLike = 'I Would Like',
  Optional = 'Optional',
}

interface ItemTodoList {
  title: string;
  status: TaskStatus;
  description: string;
  importance: TaskImportance;
}

const todoItems: ItemTodoList[] = [
  {
    title: 'Animes del dia', status: TaskStatus.Completed, importance: TaskImportance.IWouldLike, description: 'Ver los animes del dia: Konosuba, Tate no yuusha',
  },
  {
    title: 'Ver minimo una clase en Platzi', status: TaskStatus.InProgress, importance: TaskImportance.Necessary, description: 'Ver minimo una clase en Platzi',
  },
  {
    title: 'Hacer un dibujo', status: TaskStatus.ToDo, importance: TaskImportance.Optional, description: 'Hacer un dibujo',
  },
  {
    title: 'Dejar ok el juego de skull girls', status: TaskStatus.InProgress, importance: TaskImportance.Optional, description: 'Dejar ok el juego de skull girls',
  },
];
const first = todoItems[0];
function App() {
  return (
    <>
      <Header userName="caper">
        <TodoSearch />
      </Header>
      <main>
        <Menu>
          <MenuItems itemType={DataType.Category} />
          <MenuItems itemType={DataType.Goal} />
          <MenuItems itemType={DataType.Objetive} />
          <MenuItems itemType={DataType.Task} />
        </Menu>
        <div className="interface">
          <TodoCounter completed={2} total={5} />
          <div className="tasks">
            <TodoList>
              {todoItems.map((todo) => (
                <TodoItem
                  key={todo.title}
                  title={todo.title}
                  status={todo.status}
                />
              ))}
            </TodoList>
            <TaskDetails
              title={first.title}
              description={first.description}
              status={first.status}
              importance={first.importance}
            />
          </div>
          <TodoCreateButton />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
