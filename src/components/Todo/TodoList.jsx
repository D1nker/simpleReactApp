import React, { useState, useEffect } from 'react';
import '../../assets/css/App.css';
import { Button, Form, FormControl, InputGroup, ListGroup } from 'react-bootstrap';

const TodoList = (props) => {
  // Déclaration d'une nouvelle variable d'état, que l'on appellera “count”
  const [todo, setTodo] = useState('Todo 1');
  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    document.title = `Vous avez cliqué ${todo} fois`;
  });

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

  const handleChange = (event) => {
    const { value } = event.target;
    setTodo(value);
  }
  console.log(todo);

  return (
    <div className="App-todoList">
      <h1>You have {props.children.length} to do today</h1>
      <Form inline>
        <InputGroup>
          <FormControl
            name="todo"
            value={todo}
            onChange={handleChange}
          />
        </InputGroup>
        <Button bsstyle="primary" type="submit" onClick={() => setTodo}>Add</Button>
      </Form>
      <div className="App-todoItem">
        <ListGroup as="ul">
          {props.children}
        </ListGroup>
      </div>
    </div>
  );
}

export default TodoList;
