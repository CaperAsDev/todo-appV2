/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: JSX.Element
  toClose:React.Dispatch<React.SetStateAction<boolean>>
};
export default function Modal({ children, toClose }: ModalProps) {
  const target = document.querySelector('#modal');
  if (target) {
    return createPortal(
      <div className="modal">
        {children}
        <div
          className="modal__background"
          onClick={() => { toClose(false); }}
        />
      </div>,
      target,
    );
  }
}
