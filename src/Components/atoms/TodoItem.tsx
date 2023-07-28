import {
  BsFillCheckCircleFill, BsFillDashCircleFill, BsAlarmFill, BsCalendarWeek, BsCupHotFill,
} from 'react-icons/bs';
import { useContext } from 'react';
import { TaskStatus } from '../../models';
import { TaskContext } from '../../Contexts/TaskContext';

type TodoItemProps = {
  title: string,
  status: TaskStatus,
  id: `${string}-${string}-${string}-${string}-${string}`,
};

export default function TodoItem({
  title, status, id,
}: TodoItemProps) {
  const { setIdSelected, idSelected } = useContext(TaskContext);
  const iconComponent = () => {
    let icon;
    if (status === TaskStatus.Completed)icon = <BsFillCheckCircleFill />;
    else if (status === TaskStatus.ToDo)icon = <BsCalendarWeek />;
    else if (status === TaskStatus.InProgress)icon = <BsCupHotFill />;
    else if (status === TaskStatus.Paused)icon = <BsAlarmFill />;
    else icon = <BsFillDashCircleFill />;
    return (
      icon
    );
  };
  const isSelected = id === idSelected;
  return (
    <button
      type="button"
      className="item-container"
      onClick={() => {
        setIdSelected(id);
      }}
    >
      <p
        className={isSelected ? 'todo-item item--selected' : 'todo-item'}
      >
        <span>
          {title}
        </span>
        <span
          className={`item__status item__status--${status}`}
        >
          {iconComponent()}
        </span>
      </p>
    </button>
  );
}
