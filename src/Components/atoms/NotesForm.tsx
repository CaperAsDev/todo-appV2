/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useState } from 'react';
import CloseButton from './CloseButton';
import Button, { Sizes } from './Button';
import { TaskContext } from '../../Contexts/TaskContext';

type NoteFormProps = {
  toClose: React.Dispatch<React.SetStateAction<boolean>>
};

export default function NotesForm({ toClose }: NoteFormProps) {
  const { updateTask, taskToRender } = useContext(TaskContext);
  const [note, setNote] = useState('');
  const handleNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.target.value.length === 1) {
      setNote(e.target.value.trim().toUpperCase());
    } else {
      setNote(e.target.value);
    }
  };
  const handleSubmit = () => {
    if (taskToRender) {
      const { notes } = taskToRender;
      if (Array.isArray(taskToRender.notes)) {
        const newNotes = [...notes, note];
        updateTask(taskToRender.id, { notes: newNotes });
        toClose(false);
      } else {
        const newNotes = [note];
        updateTask(taskToRender.id, { notes: newNotes });
        toClose(false);
      }
    }
  };
  return (
    <div className="form-container">
      <form className="form">
        <h3 className="form-header">Create a note</h3>
        <div className="form-inputs">
          <label htmlFor="noteText">Write your note</label>
          <textarea
            name="noteText"
            id="noteText"
            value={note}
            onChange={handleNote}
            placeholder="No olvidar hacer commit al resolver el issue."
          />
        </div>
        <Button
          content="Add Note"
          size={Sizes.Medium}
          customClass="action-button"
          action={handleSubmit}
        />
      </form>
      <CloseButton action={() => toClose(false)} />
    </div>
  );
}
