import React from 'react';

import { TaskMemoryService } from './service';
import { Task } from './models';
import AppUI from './AppUi';

function App() {
  const initialState = TaskMemoryService.getAllTasks('MLM_Tas');

  const [tasks, setTasks] = React.useState<Array<Task>>(initialState);
  const taskService = new TaskMemoryService(tasks, setTasks, 'MLM_Tas');

  const [searchValue, setSearchValue] = React.useState(' ');
  const [idSelected, setIdSelected] = React.useState<Task['id']>(tasks[0]?.id);
  const indexTask = tasks.findIndex((task) => task.id === idSelected);

  const searchedTodo = tasks
    .filter((todo) => {
      const descriptionTxt = todo.description.toLowerCase();
      const titleTxt = todo.title.toLowerCase();
      const searchTxt = searchValue.toLowerCase();
      return (
        descriptionTxt.includes(searchTxt)
      || titleTxt.includes(searchTxt));
    });
  return (
    <AppUI
      setSearchValue={setSearchValue}
      searchValue={searchValue}
      tasks={tasks}
      searchedTodo={searchedTodo}
      idSelected={idSelected}
      setIdSelected={setIdSelected}
      indexTask={indexTask}
      taskService={taskService}
    />
  );
}

export default App;
