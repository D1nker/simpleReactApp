import React from 'react';
import './assets/css/App.css';
import MainContent from './components/MainContent';
import Todos from './components/Todos';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
