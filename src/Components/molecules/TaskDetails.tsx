import { useContext } from 'react';
import { TaskStatus } from '../../models';
import Button, { Sizes } from '../atoms/Button';
import { TaskContext } from '../../Contexts/TaskContext';

function TaskDetails() {
  const { firstTask, updateTask } = useContext(TaskContext);
  const { id, status } = firstTask;

  let firstButtonText: string;
  let secondButtonText: string;
  let newStatusFirstButton:TaskStatus;
  let newStatusSecondButton:TaskStatus;

  if (status === TaskStatus.ToDo) {
    firstButtonText = 'Start';
    secondButtonText = 'Cancel';
    newStatusFirstButton = TaskStatus.InProgress;
    newStatusSecondButton = TaskStatus.Canceled;
  } else if (status === TaskStatus.InProgress) {
    firstButtonText = 'Pause';
    secondButtonText = 'Complete';
    newStatusFirstButton = TaskStatus.Paused;
    newStatusSecondButton = TaskStatus.Completed;
  } else if (status === TaskStatus.Paused) {
    firstButtonText = 'Continue';
    secondButtonText = 'Cancel';
    newStatusFirstButton = TaskStatus.InProgress;
    newStatusSecondButton = TaskStatus.Canceled;
  }

  const firstTaskAction = () => {
    if (status === undefined) return;
    updateTask(id, { status: newStatusFirstButton });
  };
  const secondTaskAction = () => {
    if (status === undefined) return;
    updateTask(id, { status: newStatusSecondButton });
  };

  const statusActions = () => {
    if (status === TaskStatus.Completed) { return (<p>Notas de La tarea completada</p>); }
    if (status === TaskStatus.Canceled) { return (<p>Notas de La tarea cancelada</p>); }

    return (
      <>
        <Button
          size={Sizes.Small}
          action={firstTaskAction}
          content={firstButtonText}
          customClass={`task--${status}`}
        />
        <Button
          size={Sizes.Small}
          action={secondTaskAction}
          content={secondButtonText}
          customClass={`task--${status}`}
        />
      </>
    );
  };
  return (
    <div className="current-task">
      <h3>{firstTask.title}</h3>
      <div className="task-status">
        <p>{firstTask.importance}</p>
        <div className="status-control">
          <p className="status__title">{firstTask.status}</p>
          <div className="status__actions">
            {statusActions()}
          </div>
        </div>
      </div>
      <p className="description">{firstTask.description}</p>
    </div>
  );
}

export default TaskDetails;
