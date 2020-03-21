import React from 'react';
import '../../assets/css/App.css';
import { ListGroup } from "react-bootstrap";

const TodoItem = () => {

  return (
    <div className="App-todoItem">
    <ListGroup >
      <ListGroup.Item action href="#link1">Todo 1</ListGroup.Item>
      <ListGroup.Item action href="#link2">Todo 2</ListGroup.Item>
      <ListGroup.Item disabled action href="#link3">Todo 3</ListGroup.Item>
      <ListGroup.Item action href="#link4">Todo 4</ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default TodoItem;

