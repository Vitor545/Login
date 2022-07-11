import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import './styles/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes />;
    </BrowserRouter>
  );
}

export default App;
