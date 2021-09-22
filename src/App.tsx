import React from 'react';
import './App.css';
import Header from './components/Header'
import Corner from './components/Corner'
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Corner />
      <Header />
    </div>
  );
}

export default App;
