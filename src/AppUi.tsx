import Header from './Components/organisms/Header';
import Footer from './Components/atoms/Footer';
import Menu from './Components/molecules/Menu';
import Reloj from './Components/atoms/Clock';
import TaksManager from './Components/organisms/TaskManager';

export default function AppUI() {
  console.log('AppUI');
  return (
    <>
      <Header userName="caper" />
      <main>
        <Menu />
        <TaksManager />
        <Reloj />
      </main>
      <Footer />
    </>
  );
}
