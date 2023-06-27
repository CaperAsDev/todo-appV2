import { useContext } from 'react';
import { TaskStatus } from '../../models';
import Button, { Sizes } from '../atoms/Button';
import { TaskContext } from '../../Contexts/TaskContext';

function TaskDetails() {
  const { taskToRender, updateTask } = useContext(TaskContext);
  if (taskToRender === undefined) {
    return (
      <p>Select a Task to see </p>
    );
  }
  const { id, status } = taskToRender;

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
          customClass={`button--${newStatusFirstButton}`}
        />
        <Button
          size={Sizes.Small}
          action={secondTaskAction}
          content={secondButtonText}
          customClass={`button--${newStatusSecondButton}`}
        />
      </>
    );
  };
  return (
    <div className="current-task">
      <h3>{taskToRender.title}</h3>
      <div className="task-status">
        <p>{taskToRender.importance}</p>
        <div className="status-control">
          <p className="status__title">{taskToRender.status}</p>
          <div className="status__actions">
            {statusActions()}
          </div>
        </div>
      </div>
      <p className="description">{taskToRender.description}</p>
    </div>
  );
}

export default TaskDetails;
