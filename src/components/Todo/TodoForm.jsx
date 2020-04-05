import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import '../../assets/css/App.css';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = (props) => {
  const [task, setTask] = useState('Learn smthing new ?');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTask(value);
  }

  const handleSubmit = event => {
    console.log('allo');
    event.preventDefault();
  };

  return (
    <div className="App-todoForm">
      <Form inline onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl
            name="task"
            value={task}
            onChange={handleInputChange}
          />
        </InputGroup>
        <Button bsstyle="primary" className="ml-2" type="submit">Add</Button>
      </Form>
    </div>
  )
}


export default TodoForm;
