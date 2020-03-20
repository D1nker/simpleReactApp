import React from 'react';
import '../../assets/css/App.css';
import { ListGroup } from "react-bootstrap";

const TodoItem = () => {

  return (
    <div className="App-todoItem">
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
       Todo 1
      </ListGroup.Item>
      <ListGroup.Item as="li">Todo 2</ListGroup.Item>
      <ListGroup.Item as="li" disabled>
        Todo 3
      </ListGroup.Item>
      <ListGroup.Item as="li">Todo 4</ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default TodoItem;

