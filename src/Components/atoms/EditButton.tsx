/* eslint-disable jsx-a11y/control-has-associated-label */
import { BsPencilSquare } from 'react-icons/bs';

export default function EditButton({ action }: { action:() => void }) {
  return (
    <button type="button" className="edithButton" onClick={action}><BsPencilSquare /></button>
  );
}
