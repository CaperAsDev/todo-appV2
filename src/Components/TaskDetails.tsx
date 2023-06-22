import { Task, TaskStatus } from '../models';
import { TaskService } from '../service';

type TaskDetailsProps = {
  task: Task;
  service: TaskService
};

function TaskDetails({ task, service } : TaskDetailsProps) {
  const { status, id } = task;

  let firstButtonText: string;
  let secondButtonText: string;
  let newStatusFirstButton:TaskStatus;
  let newStatusSecondButton:TaskStatus;

  if (task.status === TaskStatus.ToDo) {
    firstButtonText = 'Start';
    secondButtonText = 'Cancel';
    newStatusFirstButton = TaskStatus.InProgress;
    newStatusSecondButton = TaskStatus.Canceled;
  } else if (task.status === TaskStatus.InProgress) {
    firstButtonText = 'Pause';
    secondButtonText = 'Complete';
    newStatusFirstButton = TaskStatus.Paused;
    newStatusSecondButton = TaskStatus.Completed;
  } else if (task.status === TaskStatus.Paused) {
    firstButtonText = 'Continue';
    secondButtonText = 'Cancel';
    newStatusFirstButton = TaskStatus.InProgress;
    newStatusSecondButton = TaskStatus.Canceled;
  }

  const firstTaskAction = () => {
    if (status === undefined) return;
    service.updateTask(id, { status: newStatusFirstButton });
  };
  const secondTaskAction = () => {
    if (status === undefined) return;
    service.updateTask(id, { status: newStatusSecondButton });
  };

  const statusActions = () => {
    if (task.status === TaskStatus.Completed) { return (<p>Notas de La tarea completada</p>); }
    if (task.status === TaskStatus.Canceled) { return (<p>Notas de La tarea cancelada</p>); }

    return (
      <>
        <button
          className={`action-buttons ${task.status}`}
          type="button"
          onClick={firstTaskAction}
        >{firstButtonText}
        </button>
        <button
          className={`action-buttons ${task.status}`}
          type="button"
          onClick={secondTaskAction}
        >{secondButtonText}
        </button>
      </>
    );
  };
  return (
    <div className="current-task">
      <h3>{task.title}</h3>
      <div className="task-status">
        <p>{task.importance}</p>
        <div className="status-control">
          <p className="status__title">{task.status}</p>
          <div className="status__actions">
            {statusActions()}
          </div>
        </div>
      </div>
      <p className="description">{task.description}</p>
    </div>
  );
}

export default TaskDetails;
