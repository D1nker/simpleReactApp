import React from 'react';
import '../../assets/css/App.css';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const TodoItem = (props) => {
  return (
    <React.Fragment>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={props.completed} onChange={() => props.handleCheckboxChange(props.id)} />
        </InputGroup.Prepend>
        <FormControl value={props.name} onChange={() => {}} onFocus={() => props.onFocus(true)} onBlur={() => props.onFocus(false)} />
        {props.focus ? <Button className="btn btn-sm ml-2 mr-2" variant="success" type="submit">Submit</Button> : null}
        {props.focus ? <Button className="btn btn-sm mr-2" variant="danger" type="submit">Delete</Button> : null}
      </InputGroup>
    </React.Fragment>
  );
}

export default TodoItem;

