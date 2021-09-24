import React from 'react';
import './App.css';
import Header from './components/Header'
import Corner from './components/Corner'
import Main from './components/Main'
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Corner position="left"/>
      <Corner position="right"/>
    </div>
  );
}

export default App;
