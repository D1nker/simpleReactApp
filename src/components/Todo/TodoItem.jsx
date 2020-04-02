import React from 'react';
import '../../assets/css/App.css';
import { FormControl, InputGroup } from 'react-bootstrap';

const TodoItem = (props) => {
  return (
    <React.Fragment>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={props.completed} onChange={() => props.handleCheckboxChange(props.id)} />
        </InputGroup.Prepend>
        <FormControl value={props.name} onChange={() => { }}/>
      </InputGroup>
    </React.Fragment>
  );
}

export default TodoItem;

