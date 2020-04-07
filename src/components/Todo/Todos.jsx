import React, { useEffect, useReducer, useState, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import '../../assets/css/App.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import filterReducer from '../../reducer/filter.reducer';
import dataReducer from '../../reducer/data.reducer';
import todoReducer from '../../reducer/todo.reducer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETED } from '../../reducer/filter.constant';
import { TODOS_URL } from '../../app.constant';
import todoFilter from './todoFilter';

const Todos = () => {
  const initialState = {
    isLoading: true,
    isError: false,
    data: [],
  };
  const [state, dispatch] = useReducer(dataReducer, initialState)
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const { data, isLoading, isError } = state;
  const [todos, dispatchTodos] = useReducer(todoReducer, data);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' })
      await fetch(TODOS_URL)
        .then(res => res.json())
        .then(result => dispatch({
          type: 'FETCH_SUCCESS',
          payload: result
        }))
        .catch(error => {
          dispatch({ type: 'FETCH_FAILURE' })
          new Error(`Something went wrong... See ${error}`)
        })
    }
    fetchData()
  }, []); // second empty array parameter to encure that useEffect is running once


  // see ./todoFilter.js
  const filteredTodos = todoFilter(data, filter);
  const handleShowAll = () => dispatchFilter({ type: SHOW_ALL });
  const handleShowCompleted = () => dispatchFilter({ type: SHOW_COMPLETED });
  const handleShowIncompleted = () => dispatchFilter({ type: SHOW_INCOMPLETED });
  // we could've used 1 function to make this work
  // const handleFilterDisplay = (filter) => dispatchFilter({type: filter})


  // const handleCheckboxChange = (id) => {
  //   setTodos(
  //     todos.map(todo => {
  //       if (todo.id !== id) {
  //         return todo;
  //       }
  //       return {...todo, completed: !todo.completed}
  //     })
  //   );
  // };

  const handleCheckboxChange = todo => {
    console.log(todo);
    dispatchTodos({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  };
  const handleInputFocus = (bool) => setFocus(bool);

  return (
    <div className="App-todos">
      { isError && <h1 style={{ 'color': '#282c34' }}>Something went wrong...</h1> }
      {
        isLoading
          ? <h1 style={{ 'color': '#282c34' }}>Loading ...</h1>
          : <Fragment>
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
                      handleCheckboxChange={(todo) => handleCheckboxChange(todo)}
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
