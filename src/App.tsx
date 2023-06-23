import AppUI from './AppUi';
import { TaskProvider } from './Components/TaskContext';

function App() {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
