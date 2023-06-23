import React from 'react';
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
import Message from './Components/Message';
import { TaskContext } from './Components/TaskContext';

export default function AppUI() {
  const {
    error,
    loading,
    setSearchValue,
    searchValue,
    tasks,
    searchedTodo,
    idSelected,
    setIdSelected,
    indexTask,
    taskService,
  } = React.useContext(TaskContext);
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
            {loading && <Message text="Cargando..." />}
            {error && <Message text="Error..." />}
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
