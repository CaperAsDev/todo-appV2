import AppUI from './AppUi';
import { TaskProvider } from './Contexts/TaskContext';

function App() {
  console.log('App');
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
