import { TaskImportance, TaskStatus } from '../models';
import { TaskService } from '../service';

type CreateProps = {
  addNew : TaskService
};

function createNew(addNew: TaskService) {
  addNew.create({
    title: 'Hacer el almuerzo',
    status: TaskStatus.ToDo,
    importance: TaskImportance.Important,
    description: 'Ir a cocinar las lentejas, ver si tenemos ingredientes, sino ir a comprarlos',
    startDate: new Date(),
    endDate: null,
    objetiveId: 'khfjfjf',
  });
}
export default function TodoCreateButton({ addNew }: CreateProps) {
  return <button type="button" className="create-btn" onClick={() => createNew(addNew)}>Crear Tarea</button>;
}
