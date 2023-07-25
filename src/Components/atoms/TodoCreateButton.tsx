import React from 'react';
import { TaskImportance } from '../../models';
import { TaskContext } from '../../Contexts/TaskContext';

export default function TodoCreateButton() {
  //! Aqui se deberia crear la funcion para abrir el modal del formulario
  const { addTask } = React.useContext(TaskContext);
  const defaultTask = {
    title: 'Hacer el almuerzo',
    importance: TaskImportance.Important,
    description: 'Ir a cocinar las lentejas, ver si tenemos ingredientes, sino ir a comprarlos',
  };

  return (
    <button type="button" className="create-btn" onClick={() => addTask(defaultTask)}>
      <p className="button-text">Crear tarea</p>
    </button>
  );
}
