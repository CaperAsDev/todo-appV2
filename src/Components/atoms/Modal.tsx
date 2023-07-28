/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { TaskContext } from '../../Contexts/TaskContext';

type ModalProps = {
  children: JSX.Element
};
export default function Modal({ children }: ModalProps) {
  const target = document.querySelector('#modal');
  const { setOpenModal } = useContext(TaskContext);
  if (target) {
    return createPortal(
      <div className="modal">
        {children}
        <div className="modal__background" onClick={() => setOpenModal(false)} />
      </div>,
      target,
    );
  }
}
