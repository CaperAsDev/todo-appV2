enum TaskStatus {
  Completed = 'Completed',
  InProgress = 'InProgress',
  ToDo = 'ToDo',
}

type TodoItemProps = {
  title: string,
  status: TaskStatus,
};

export default function TodoItem({ title, status }: TodoItemProps) {
  let icon :string;
  if (status === TaskStatus.Completed)icon = '✅';
  else if (status === TaskStatus.ToDo)icon = '☑️';
  else icon = '⏳';
  return (
    <div className="todo-item">
      <p>{title}</p>
      <span>{icon}</span>
    </div>
  );
}
