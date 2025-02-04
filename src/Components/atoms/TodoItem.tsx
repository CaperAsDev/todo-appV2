import { useContext } from "react";
import { TaskStatus } from "../../models";
import { TaskContext } from "../../Contexts/TaskContext";
import TaskIcon from "./TaskIcon";

type TodoItemProps = {
  title: string;
  status: TaskStatus;
  id: `${string}-${string}-${string}-${string}-${string}`;
};

export default function TodoItem({ title, status, id }: TodoItemProps) {
  const { setIdSelected, idSelected } = useContext(TaskContext);

  const isSelected = id === idSelected;
  return (
    <button
      type="button"
      className="item-container"
      onClick={() => {
        setIdSelected(id);
      }}
    >
      <p className={isSelected ? "todo-item item--selected" : "todo-item"}>
        <span>{title}</span>
        <span className={`item__status item__status--${status}`}>
          <TaskIcon status={status} />
        </span>
      </p>
    </button>
  );
}
