import { domEvents, loadPage } from './components/domComp';
import '../styles/main.scss';

const init = () => {
  loadPage();
  domEvents();
};

init();
