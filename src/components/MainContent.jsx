import React, { useState, useEffect } from 'react';
import '../assets/css/App.css';
import Button from 'react-bootstrap/Button';

const MainContent = () => {
  // Déclaration d'une nouvelle variable d'état, que l'on appellera “count”
  const [count, setCount] = useState(0);
  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  });

  return (
    <div className="App-main-content">
      <main>
        <p>You clicked {count} times</p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => setCount(count + 1)}
        >
          Click here
        </Button>
      </main>
    </div>
  );
}

export default MainContent;
