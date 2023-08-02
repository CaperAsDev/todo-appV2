import React, { useContext } from 'react';
import { TaskStatus } from '../../models';
import EditButton from '../atoms/EditButton';
import Button, { Sizes } from '../atoms/Button';
import { TaskContext } from '../../Contexts/TaskContext';
import Modal from '../atoms/Modal';
import BaseForm from './BaseForm';
import NotesButtons from './NotesButtons';
import { renderTextWithLineBreaks } from '../../utils/utils';

function TaskDetails() {
  const {
    taskToRender, updateTask,
  } = useContext(TaskContext);
  const [editModalOpen, setEditModalOpen] = React.useState(false);

  if (taskToRender === undefined) {
    return (
      <p>Select a Task to see </p>
    );
  }
  const { id, status } = taskToRender;
  const timeFormat = new Intl.DateTimeFormat('es', { dateStyle: 'long' });

  let firstButtonText: string;
  let secondButtonText: string;
  let newStatusFirstButton:TaskStatus;
  let newStatusSecondButton:TaskStatus;
  let startDateString = taskToRender.startDate ? timeFormat.format(taskToRender.startDate) : ' Not started yet';
  let endDateString = taskToRender.endDate ? timeFormat.format(taskToRender.endDate) : ' Not finished yet';

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
    if (status === TaskStatus.ToDo) {
      const taskUpdated = updateTask(id, { startDate: Date.now() });
      startDateString = timeFormat.format(taskUpdated?.startDate);
    }

    updateTask(id, { status: newStatusFirstButton });
  };
  const secondTaskAction = () => {
    if (status === TaskStatus.InProgress) {
      const taskUpdated = updateTask(id, { endDate: Date.now() });
      endDateString = timeFormat.format(taskUpdated?.endDate);
    }

    updateTask(id, { status: newStatusSecondButton });
  };
  const editButtonHandler = () => setEditModalOpen(true);
  const notesLength = () => {
    if (taskToRender && taskToRender.notes) {
      const anyNote = taskToRender.notes.length >= 1;
      return anyNote;
    }
    return false;
  };
  const statusActions = () => {
    if (status === TaskStatus.Completed) {
      return (
        <NotesButtons isHorizontal={false} seeButton={notesLength()} createButton />
      );
    }
    if (status === TaskStatus.Canceled) {
      return (
        <NotesButtons isHorizontal={false} seeButton={notesLength()} createButton />
      );
    }

    return (
      <>
        <Button
          size={Sizes.Small}
          action={firstTaskAction}
          content={firstButtonText}
          customClass={`button--${newStatusFirstButton} upper-button`}
        />
        <Button
          size={Sizes.Small}
          action={secondTaskAction}
          content={secondButtonText}
          customClass={`button--${newStatusSecondButton} down-button`}
        />
      </>
    );
  };
  return (
    <div className="current-task">
      <h3 className="task-detail__title">
        {taskToRender.title}
        <EditButton action={editButtonHandler} />
        {editModalOpen && (
        <Modal toClose={setEditModalOpen}>
          <BaseForm isEdit toClose={setEditModalOpen} />
        </Modal>
        )}
      </h3>
      <div className="task-status">
        <div className="task-info">
          <p className={`task-importance task-importance--${taskToRender.importance}`}>{taskToRender.importance}</p>
          <div className="info-dates">
            <p className={`info__date info__date--start ${!startDateString.toLocaleLowerCase().includes('not')}`}>{startDateString}</p>
            {taskToRender.endDate || status === TaskStatus.Canceled
              ? (<p className={`info__date info__date--end ${!endDateString.toLocaleLowerCase().includes('not')}`}>{endDateString}</p>)
              : (
                <NotesButtons isHorizontal createButton seeButton={notesLength()} />
              )}

          </div>
        </div>
        <div className="status-control">
          <p className={`status__title status__title--${taskToRender.status}`}>{taskToRender.status}</p>
          <div className="status__actions">
            {statusActions()}
          </div>
        </div>
      </div>
      <p className="description">{renderTextWithLineBreaks(taskToRender.description)}</p>
    </div>
  );
}

export default TaskDetails;
