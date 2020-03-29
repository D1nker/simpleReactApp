import React, { useEffect, useState } from 'react';
import '../../assets/css/App.css';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const todosUrl = 'http://localhost:3001/todos';

  const fetchResource = (url, setter) => fetch(url)
    .then(res => res.json())
    .then(result => setter(result))
  ;

  // on peut avoir autant de useEffect qu'on veut
  useEffect(() => {
    fetchResource(todosUrl, setTodos);
  }, []); // second empty array parameter to encure that useEffect is running once


  const todoItemsComponent = todos.map(todo => {
    return (
      <TodoItem
        key={todo.id}
        name={todo.name}
        completed={todo.completed}
      />
    )
  })

  return (
    <div className="App-todos">
      <TodoList>
      {todoItemsComponent}
      </TodoList>
    </div>
  );
}

export default Todos;
