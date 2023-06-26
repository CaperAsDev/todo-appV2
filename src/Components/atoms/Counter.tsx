import { Task, TaskStatus } from '../../models';

type TodoFounterProps = {
  tasks: Task[];
};
export default function Counter({ tasks }: TodoFounterProps) {
  const countTodosCompleted = tasks.filter((todo) => todo.status === TaskStatus.Completed).length;
  return (
    <h2 className="counter">
      You have completed {countTodosCompleted} tasks out of {tasks.length}
    </h2>
  );
}
