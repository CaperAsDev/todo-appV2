type TodoItemProps = {
  text: string,
  completed: boolean,
};

export default function TodoItem({ text, completed }: TodoItemProps) {
  return (
    <div>
      <span>{completed ? '✅' : '☑️'}</span>
      <p>{text}</p>
      <span>❌</span>
    </div>
  );
}
