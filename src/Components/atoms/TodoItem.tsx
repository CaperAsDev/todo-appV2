import {
  BsFillCheckCircleFill, BsFillDashCircleFill, BsAlarmFill, BsCalendarWeek, BsCupHotFill,
} from 'react-icons/bs';
import { TaskStatus } from '../../models';

type TodoItemProps = {
  title: string,
  status: TaskStatus,
  id: string,
  setIdSelected: (id:string) => void,
  idSelected: string,
};

export default function TodoItem({
  title, status, id, setIdSelected, idSelected,
}: TodoItemProps) {
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
      className={isSelected ? 'todo-item item--selected' : 'todo-item'}
      onClick={() => {
        setIdSelected(id);
      }}
    >
      <p>{title}</p>
      <span
        className={`item__status item__status--${status}`}
      >
        {iconComponent()}
      </span>
    </button>
  );
}
