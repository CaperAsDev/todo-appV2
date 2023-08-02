import { useState } from 'react';
import Button, { Sizes } from '../atoms/Button';
import NotesForm from '../atoms/NotesForm';
import Modal from '../atoms/Modal';
import NotesList from './NotesLists';

type NotesButtonsProps = {
  isHorizontal: boolean
  seeButton: boolean
  createButton: boolean
};

export default function NotesButtons({ isHorizontal, seeButton, createButton }: NotesButtonsProps) {
  const [openCreateNoteModal, setOpenCreateNoteModal] = useState(false);
  const [openNoteModal, setOpenNoteModal] = useState(false);
  return (
    <div className={`button-container ${isHorizontal && 'horizontal-align'}`}>
      {createButton && (
        <Button size={Sizes.Small} content="Create Note" customClass="create-note-button" action={() => { setOpenCreateNoteModal(true); }} />
      )}
      {seeButton && (
        <Button size={Sizes.Small} content="See Notes" customClass="see-notes-button" action={() => { setOpenNoteModal(true); }} />
      )}
      {openCreateNoteModal && (
      <Modal toClose={setOpenCreateNoteModal}>
        <NotesForm toClose={setOpenCreateNoteModal} />
      </Modal>
      )}
      {openNoteModal && (
      <Modal toClose={setOpenNoteModal}>
        <NotesList toClose={setOpenNoteModal} />
      </Modal>
      )}
    </div>
  );
}
