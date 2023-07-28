/* eslint-disable jsx-a11y/control-has-associated-label */
import { BsFillXCircleFill } from 'react-icons/bs';

export default function CloseButton({ action }: { action:() => void }) {
  return (
    <button type="button" className="closeButton" onClick={action}><BsFillXCircleFill /></button>
  );
}
