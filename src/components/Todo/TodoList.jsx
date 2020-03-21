import React, { useState, useEffect } from 'react';
import '../../assets/css/App.css';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

const TodoList = (props) => {
  // Déclaration d'une nouvelle variable d'état, que l'on appellera “count”
  const [todo, setTodo] = useState([]);
  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    document.title = `Vous avez cliqué ${todo} fois`;
  });

  return (
    <div className="App-todoList">
      <h1>You have {todo.length} to do today</h1>
      <Form inline>
        <InputGroup>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Button bsstyle="primary" type="submit" onClick={setTodo }>Add</Button>
      </Form>
      {props.children}
    </div>
  );
}

export default TodoList;
