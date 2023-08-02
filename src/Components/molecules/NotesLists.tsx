import { useContext } from 'react';
import { TaskContext } from '../../Contexts/TaskContext';
import CloseButton from '../atoms/CloseButton';
import { renderTextWithLineBreaks } from '../../utils/utils';

type NotesListProps = {
  toClose: React.Dispatch<React.SetStateAction<boolean>>
};

export default function NotesList({ toClose }: NotesListProps) {
  const { taskToRender } = useContext(TaskContext);
  return (
    <div className="list-container">
      <div className="content-container">
        <h3 className="List-header">Task Notes</h3>
        <ol className="ordered-list">
          {taskToRender?.notes?.map((note) => <li key={note}>{renderTextWithLineBreaks(note)}</li>)}
        </ol>
      </div>
      <CloseButton action={() => toClose(false)} />
    </div>
  );
}
