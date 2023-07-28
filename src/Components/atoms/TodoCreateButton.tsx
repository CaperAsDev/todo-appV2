import { useContext } from 'react';
import { TaskContext } from '../../Contexts/TaskContext';

export default function TodoCreateButton() {
  const { setOpenModal } = useContext(TaskContext);

  return (
    <button type="button" className="create-btn" onClick={() => setOpenModal(true)}>
      <p className="button-text">Crear tarea</p>
    </button>
  );
}
