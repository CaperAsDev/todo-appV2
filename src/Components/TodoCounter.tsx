type TodoFounterProps = {
  completed: number,
  total: number
};
export default function TodoCounter({ completed, total }: TodoFounterProps) {
  return (
    <h2>
      You have completed {completed} tasks out of {total}
    </h2>
  );
}
