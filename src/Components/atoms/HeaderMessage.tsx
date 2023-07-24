import { useContext } from 'react';
import Counter from './Counter';
import Message from './Message';
import { TaskContext } from '../../Contexts/TaskContext';
import LoadingSkeleton from './LoadingSktn';

export default function HeaderMessage() {
  const {
    error,
    loading,
    empty,
    noCoincidence,
    searchedTodo,
  } = useContext(TaskContext);
  if (error) {
    return (
      <Message text="Upps, ocurrion un error" type="error" />
    );
  } if (loading) {
    return (
      <LoadingSkeleton />
    );
  } if (empty) {
    return (
      <Message text="No tienes Tareas" type="empty" />
    );
  } if (noCoincidence) {
    return (
      <Message text="No se encontraron coincidencias para tu busqueda" type="notFound" />
    );
  }
  return (
    <Counter tasks={searchedTodo} />
  );
}
