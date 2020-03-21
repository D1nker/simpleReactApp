import React from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Todos from './components/Todos';
import Card from './components/Card';

const App = () => {

  const contact = {
    name: "d1nker",
    imgUrl: "http://placekitten.com/300/200",
    phone: "(212) 1337-1337",
    email: "d1nker@d1nker.com",
  };

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Todos />
      <Card contact={contact} />
      <Footer />
    </div>
  );
}

export default App;
