import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/App.css';
import Button from 'react-bootstrap/Button';

const MainContent = ({ initialCount }) => {
  initialCount = 0;
  // Déclaration d'une nouvelle variable d'état, que l'on appellera “count”
  const [count, setCount] = useState(initialCount);
  const prevCountRef = useRef();
  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    prevCountRef.current = count;
    document.title = `Vous avez cliqué ${count} fois`;
  });

  const prevCount = prevCountRef.current;
  console.log(prevCount);

  return (
    <div className="App-main-content">
      <main>
        <p>You clicked {count} times</p>

        <div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setCount(prevCount => prevCount + 1)}
          >
            +
          </Button>

          <Button
            variant="primary"
            size="lg"
            onClick={() => setCount(prevCount => prevCount - 1)}
          >
            -
          </Button>

          <Button
            variant="primary"
            size="lg"
            onClick={() => setCount(initialCount)}
          >
            Reset
          </Button>
        </div>


      </main>
    </div>
  );
}

export default MainContent;
