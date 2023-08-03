import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import router
import { BrowserRouter as Router } from 'react-router-dom';

//import house context provider
import HouseContextProvider from './components/HouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className = 'max-w-[1440px] mx-auto bg-white'>
<HouseContextProvider>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </HouseContextProvider>
  </div>
);
