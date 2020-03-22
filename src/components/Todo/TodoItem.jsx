import React from 'react';
import '../../assets/css/App.css';
import { ListGroup } from 'react-bootstrap';

const TodoItem = (props) => {
  return (
    <React.Fragment>
      <ListGroup.Item as="li" variant={props.completed ? "success" : "warning"}>{props.name}</ListGroup.Item>
    </React.Fragment>
  );
}

export default TodoItem;

