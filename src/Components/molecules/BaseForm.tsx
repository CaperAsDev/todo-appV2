/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useState } from 'react';
import { TaskImportance } from '../../models';
import Button, { Sizes } from '../atoms/Button';
import CloseButton from '../atoms/closeButton';
import { TaskContext } from '../../Contexts/TaskContext';

export default function BaseForm() {
  const { addTask, setOpenModal } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [importance, setImportance] = useState(TaskImportance.Important);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.length === 1) {
      setTitle(e.target.value.trim().toUpperCase());
    } else {
      setTitle(e.target.value);
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.target.value.length === 1) {
      setDescription(e.target.value.trim().toUpperCase());
    } else {
      setDescription(e.target.value);
    }
  };

  const handleImportanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setImportance(e.target.value as TaskImportance);
  };
  const handleSubmit = () => {
    const areFieldsValid = title.trim() !== '' && description.trim() !== '';
    if (areFieldsValid) {
      addTask({ title, description, importance });
      setOpenModal(false);
    }
  };
  return (
    <div className="form-container">
      <form className="form">
        <h3 className="form-header">Create a new Task</h3>
        <div className="form-inputs">
          <div className="title">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Ver Capitulos del dia"
              onChange={handleTitleChange}
              value={title}
            />
          </div>
          <div className="importance">
            <label htmlFor="importance">Importance:</label>
            <select value={importance} id="importance" onChange={handleImportanceChange}>
              <option value={TaskImportance.Important}>Important</option>
              <option value={TaskImportance.Necessary}>Necessary</option>
              <option value={TaskImportance.Urgent}>Urgent</option>
              <option value={TaskImportance.Optional}>Optional</option>
              <option value={TaskImportance.IWouldLike}>I Would Like</option>
            </select>
          </div>
          <div className="description">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              placeholder="Checar animeflv a ver que salio y verlo desde la plataforma correspondiente"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        <Button size={Sizes.Medium} action={handleSubmit} content="Create Task" customClass="create-task-button" />
      </form>
      <CloseButton action={() => setOpenModal(false)} />
    </div>
  );
}
