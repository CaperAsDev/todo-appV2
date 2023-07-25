import { useContext } from 'react';
import Header from './Components/organisms/Header';
import Footer from './Components/atoms/Footer';
import Menu from './Components/molecules/Menu';
import Reloj from './Components/atoms/Clock';
import TaksManager from './Components/organisms/TaskManager';
import { TaskContext } from './Contexts/TaskContext';
import Modal from './Components/atoms/Modal';
import BaseForm from './Components/molecules/BaseForm';

export default function AppUI() {
  const { openModal } = useContext(TaskContext);
  return (
    <>
      <Header userName="caper" />
      <main>
        <Menu />
        <TaksManager />
        <Reloj />
        {openModal && (
          <Modal>
            <BaseForm />
          </Modal>
        )}
      </main>
      <Footer />
    </>
  );
}
