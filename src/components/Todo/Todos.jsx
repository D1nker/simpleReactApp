import React, { useEffect, useReducer, useState } from 'react';
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import '../../assets/css/App.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import FilterReducer from '../../reducer/Filter.reducer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../../reducer/Filter.constant';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState([]);
  const [filter, dispatchFilter] = useReducer(FilterReducer, 'ALL');

  const todosUrl = 'http://localhost:3001/todos';

  const fetchResource = (url, setter) => fetch(url)
    .then(res => res.json())
    .then(result => setter(result))
  ;

  // on peut avoir autant de useEffect qu'on veut
  useEffect(() => {
    fetchResource(todosUrl, setTodos);
  }, []); // second empty array parameter to encure that useEffect is running once

  const handleShowAll = () => dispatchFilter({ type: SHOW_ALL });

  const handleShowCompleted = () => dispatchFilter({ type: SHOW_COMPLETED });

  const handleShowIncompleted = () => dispatchFilter({ type: SHOW_INCOMPLETED });


  //
  const handleCheckboxChange = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        }
        return {...todo, completed: !todo.completed}
      })
    );
  };

  // const handleInputChange = (event) => {
  //   const { value } = event.target;
  //   setTodos(value);
  // }

  const handleSubmit = event => {
    console.log('allo');
    console.log(event.target);
    setTodos(todos.concat({ id: uuidv4(), task, completed: false }));
    event.preventDefault();
  };

  const filteredTodos = todos.filter(todo => {
    if ('ALL' === filter) {
      return true;
    }
    if ('COMPLETED' === filter && todo.completed) {
      return true;
    }
    if ('INCOMPLETED' === filter && !todo.completed) {
      return true;
    }
    return false;
  });


  return (
    <div className="App-todos">
      <h1 style={{ 'color': '#282c34' }}>You have {filteredTodos.length} to do today</h1>
      <TodoForm submit={handleSubmit}/>
      <div className="App-todoItem">
        {
          filteredTodos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                name={todo.name}
                completed={todo.completed}
                handleCheckboxChange={handleCheckboxChange}
              />
            )
          })
        }
        <div className="btn-filter">
          <Button className="mr-1" onClick={handleShowAll}>Show All</Button>
          <Button className="mr-1" onClick={handleShowCompleted}>Show Complete</Button>
          <Button className="mr-1" onClick={handleShowIncompleted}>Show Incomplete</Button>
        </div>
      </div>
    </div>
  );
}

export default Todos;
