import { createPortal } from 'react-dom';

type ModalProps = {
  children: JSX.Element
};
export default function Modal({ children }: ModalProps) {
  const target = document.querySelector('#modal');
  if (target) {
    return createPortal(
      <>
        <div className="modal">
          {children}
        </div>
        <div className="modal__background" />
      </>,
      target,
    );
  }
}
