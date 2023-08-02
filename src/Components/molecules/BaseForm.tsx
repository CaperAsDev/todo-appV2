/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useEffect, useState } from 'react';
import { TaskImportance } from '../../models';
import Button, { Sizes } from '../atoms/Button';
import CloseButton from '../atoms/CloseButton';
import { TaskContext } from '../../Contexts/TaskContext';

type BaseFormProps = {
  isEdit: boolean
  toClose: React.Dispatch<React.SetStateAction<boolean>>
};
export default function BaseForm({ isEdit, toClose }:BaseFormProps) {
  const {
    addTask, taskToRender, updateTask, setIdSelected,

  } = useContext(TaskContext);
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
      if (isEdit && taskToRender) {
        updateTask(taskToRender.id, { title, description, importance });
        toClose(false);
      } else {
        const data = addTask({ title, description, importance });
        setIdSelected(data.id);
        toClose(false);
      }
    }
  };
  useEffect(() => {
    if (isEdit && taskToRender) {
      setTitle(taskToRender.title);
      setDescription(taskToRender.description);
      setImportance(taskToRender.importance);
    }
  }, []);

  return (
    <div className="form-container">
      <form className="form">
        <h3 className="form-header">{isEdit ? 'Edit Task' : 'Create a new Task'}</h3>
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
        <Button
          size={Sizes.Medium}
          action={handleSubmit}
          content={isEdit ? 'Save changes' : 'Create Task'}
          customClass="action-button"
        />
      </form>
      <CloseButton action={() => toClose(false)} />
    </div>
  );
}
