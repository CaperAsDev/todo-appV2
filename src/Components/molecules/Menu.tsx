import { useState } from 'react';
import MenuItems, { DataType } from '../atoms/MenuItems';
import BaseForm from './BaseForm';
import Modal from '../atoms/Modal';
import Button, { Sizes } from '../atoms/Button';

function Menu() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="sideMenu">
      <div role='menu' className="menu-container">
        <div className="items-container">
          <MenuItems itemType={DataType.Category} />
          <MenuItems itemType={DataType.Goal} />
          <MenuItems itemType={DataType.Objetive} />
          <MenuItems itemType={DataType.Task} />
        </div>
        <div className="menu__side-bar" />
      </div>
      <Button
        action={() => setOpenModal(true)}
        content="Create Task"
        size={Sizes.Medium}
        customClass="create-btn"
      />
      {openModal && (
      <Modal toClose={setOpenModal}>
        <BaseForm isEdit={false} toClose={setOpenModal} />
      </Modal>
      )}
    </div>

  );
}

export default Menu;
