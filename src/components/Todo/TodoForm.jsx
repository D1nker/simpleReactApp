import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import '../../assets/css/App.css';
import { v4 as uuidv4 } from 'uuid';

// const handleChange = (event) => {
//   const { value } = event.target;
//   setTodo(value);
// }
  // handleChange(event) {
  //   this.setState({
  //       [event.target.name]: event.target.value
  //   })
  // OR
  // handleChange(event) {
  // const {name, value} = event.target;
  // [name]: value
  // }
  // check React SyntheticEvent

const TodoForm = (props) => {
  console.log(props);
  const [task] = useState('Learn smthing new ?');
  // const handleInputChange = (event) => {
  //   const { value } = event.target;
  //   setTask(value);
  // }

  return (
    <div className="App-todoForm">
      <Form inline onSubmit={props.submit}>
        <InputGroup>
          <FormControl
            name="task"
            value={task}
            onChange={props.handleInputChange}
          />
        </InputGroup>
        <Button bsstyle="primary" className="ml-2" type="submit">Add</Button>
      </Form>
    </div>
  )
}


export default TodoForm;
