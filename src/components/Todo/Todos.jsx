import React, { useEffect, useReducer, useState, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import '../../assets/css/App.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import filterReducer from '../../reducer/filter.reducer';
// import DataReducer from '../../reducer/data.reducer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../../reducer/filter.constant';
import { TODOS_URL } from '../../app.constant';
import todoFilter from './todoFilter';

// const useDataApi = (initialUrl, initialData) => {
//   // see data.reducer.js
//   const [state, dispatch] = useReducer(DataReducer, {
//     isLoading: false,
//     isError: false,
//     data: initialData
//   });
//   // on peut avoir autant de useEffect qu'on veut
//   useEffect(() => {
//     const fetchTodos = () => {
//       dispatch({ type: 'FETCH_INIT' })
//       // setIsLoading(true);
//       try {
//         //
//         fetch(initialUrl)
//           .then(res => res.json())
//           .then(result => dispatch({ type: 'FETCH_SUCCESS', payload: result }))
//         ;
//         // setTodos(todos)
//       } catch (error) {
//         dispatch({ type: 'FETCH_FAILURE' });
//       }
//       // setIsLoading(false)
//     }
//     fetchTodos();
//   }, [initialUrl]); // second empty array parameter to encure that useEffect is running once
//   return [state, null];
// };

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [focus, setFocus] = useState(false);

  const fetchResource = (url, setter) => fetch(url)
    .then(res => res.json())
    .then(result => setter(result))
  ;

  // could have as much as needed useEffect
  useEffect(() => {
    fetchResource(TODOS_URL, setTodos);
  }, []); // second empty array parameter to encure that useEffect is running once

  // see ./todoFilter.js
  const filteredTodos = todoFilter(todos, filter);

  const handleShowAll = () => dispatchFilter({ type: SHOW_ALL });
  const handleShowCompleted = () => dispatchFilter({ type: SHOW_COMPLETED });
  const handleShowIncompleted = () => dispatchFilter({ type: SHOW_INCOMPLETED });
  // we could've used 1 function to make this work
  // const handleFilterDisplay = (filter) => dispatchFilter({type: filter})

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

  const handleInputFocus = (bool) => setFocus(bool);

  return (
    <div className="App-todos">
      {
        <Fragment>
          <h1 style={{ 'color': '#282c34' }}>You have {filteredTodos.length} to do today</h1>
          <TodoForm />
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
                    onFocus={(bool) => handleInputFocus(bool)}
                    onBlur={(bool) => handleInputFocus(bool)}
                    focus={focus}
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
        </Fragment>
      }
    </div>
  );
}

export default Todos;
