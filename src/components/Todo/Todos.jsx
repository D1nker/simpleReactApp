import React from 'react';
import '../../assets/css/App.css';
import TodoItem from './TodoItem';
import TodoList from './TodoList';

const Todos = () => {
  return (
    <div className="App-todos">
      <TodoList>
        <TodoItem />
      </TodoList>
    </div>
  );
}

export default Todos;
