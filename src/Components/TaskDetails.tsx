enum TaskStatus {
  Completed = 'Completed',
  InProgress = 'InProgress',
  ToDo = 'ToDo',
}
enum TaskImportance {
  Important = 'Important',
  Urgent = 'Urgent',
  Necessary = 'Necessary',
  IWouldLike = 'I Would Like',
  Optional = 'Optional',
}

interface ItemTodoList {
  title: string;
  status: TaskStatus;
  description: string;
  importance: TaskImportance;
}
/* type TaskDetailsProps = {
  title: string,
  description: string,
  status: string,
  importance: string,
};
 */
function TaskDetails({
  title, description, status, importance,
} : ItemTodoList) {
  return (
    <div className="tasks__detail">
      <div className="current-task">
        <h3>{title}</h3>
        <div className="task-status">
          <p>{importance}</p>
          <p>{status}</p>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default TaskDetails;
