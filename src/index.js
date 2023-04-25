import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
// import App from './App';
// import AppClassComponentStateFullSistaxeSugar from './AppClassComponentStateFullSistaxeSugar';
// import AppStateWithArrayObjetc from './AppStateWithArrayObjetc';
// import AppDataFetch from './AppDataFetch';
import { Home } from './templates/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
