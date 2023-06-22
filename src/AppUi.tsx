import TodoList from './Components/TodoList';
import TaskDetails from './Components/TaskDetails';
import TodoItem from './Components/TodoItem';
import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoCreateButton from './Components/TodoCreateButton';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import MenuItems, { DataType } from './Components/MenuItems';
import Reloj from './Components/Reloj';
import { Task } from './models';
import { TaskMemoryService } from './service';

type AppUIProps = {
  setSearchValue:React.Dispatch<React.SetStateAction<string>>
  searchValue:string
  tasks:Task[]
  searchedTodo:Task[]
  idSelected: string
  setIdSelected:React.Dispatch<React.SetStateAction<string>>
  indexTask: number
  taskService: TaskMemoryService
};
export default function AppUI({
  setSearchValue,
  searchValue,
  tasks,
  searchedTodo,
  idSelected,
  setIdSelected,
  indexTask,
  taskService,
}:AppUIProps) {
  return (
    <>
      <Header userName="caper">
        <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
      </Header>
      <main>
        <Menu>
          <MenuItems itemType={DataType.Category} />
          <MenuItems itemType={DataType.Goal} />
          <MenuItems itemType={DataType.Objetive} />
          <MenuItems itemType={DataType.Task} />
        </Menu>
        <div className="interface">
          <TodoCounter tasks={tasks} />
          <div className="tasks">
            <TodoList>
              {searchedTodo.map((todo) => (
                <TodoItem
                  idSelected={idSelected}
                  key={todo.id}
                  id={todo.id}
                  setIdSelected={setIdSelected}
                  title={todo.title}
                  status={todo.status}
                />
              ))}
            </TodoList>
            {tasks.length === 0 || (
            <TaskDetails
              task={tasks[indexTask]}
              service={taskService}
            />
            )}

          </div>
          <TodoCreateButton addNew={taskService} />
        </div>
        <Reloj />
      </main>
      <Footer />
    </>
  );
}
