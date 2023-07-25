/* eslint-disable jsx-a11y/label-has-associated-control */
import { SetStateAction, useState } from 'react';
import { TaskImportance } from '../../models';
import Button, { Sizes } from '../atoms/Button';

export default function BaseForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selection, setSelection] = useState('');

  const handleTitleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setDescription(e.target.value);
  };

  const handleSelectionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelection(e.target.value);
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    console.log('Datos enviados:', { title, description, selection });
  };
  return (
    <form className="form">
      <div className="title">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Ver Capitulos del dia"
          onChange={handleTitleChange}
          value={title}
          required
        />
      </div>
      <div className="importance">
        <label htmlFor="importance">Importance:</label>
        <select name="importance" id="importance" onChange={handleSelectionChange}>
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
          id="title"
          placeholder="Checar animeflv a ver que salio y verlo desde la plataforma correspondiente"
          value={title}
          onChange={handleDescriptionChange}
          required
        />
      </div>
      <Button size={Sizes.Medium} action={() => handleSubmit} content="Create Task" />
    </form>
  );
}
