import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';

const App = () => {
  return (
    <div className={appStyles.content}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
