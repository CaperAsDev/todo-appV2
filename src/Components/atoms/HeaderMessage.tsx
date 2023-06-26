import { useContext } from 'react';
import Counter from './Counter';
import Message from './Message';
import { TaskContext } from '../../Contexts/TaskContext';

export default function HeaderMessage() {
  const {
    error,
    loading,
    empty,
    notFound,
    searchedTodo,
  } = useContext(TaskContext);
  if (error) {
    return (
      <Message text="Upps, ocurrion un error" type="error" />
    );
  } if (loading) {
    return (
      <Message text="Cargando..." type="loading" />
    );
  } if (empty) {
    return (
      <Message text="No tienes Tareas" type="empty" />
    );
  } if (notFound) {
    return (
      <Message text="No se encontraron coincidencias para tu busqueda" type="notFound" />
    );
  }
  return (
    <Counter tasks={searchedTodo} />
  );
}
