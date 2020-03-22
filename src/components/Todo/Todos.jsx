import React from 'react';
import '../../assets/css/App.css';
import TodoList from './TodoList';

const Todos = (props) => {
  return (
    <div className="App-todos">
      <TodoList>
      {props.children}
      </TodoList>
    </div>
  );
}

export default Todos;
