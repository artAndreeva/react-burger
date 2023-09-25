import React from 'react';
import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';

const App = () => {
  return (
    <div className={appStyles.content}>
      <div className={appStyles.page}>
        <AppHeader />
        <Main />
      </div>
    </div>
  );
}

export default App;
