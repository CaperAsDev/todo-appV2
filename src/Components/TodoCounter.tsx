import { Task, TaskStatus } from '../models';

type TodoFounterProps = {
  tasks: Task[];
};
export default function TodoCounter({ tasks }: TodoFounterProps) {
  const countTodosCompleted = tasks.filter((todo) => todo.status === TaskStatus.Completed).length;

  return (
    <h2>
      You have completed {countTodosCompleted} tasks out of {tasks.length}
    </h2>
  );
}
