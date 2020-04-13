import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import '../../assets/css/App.css';
import todoReducer from '../../reducer/todo.reducer';
import { URL, FILTER } from '../../app.constant';
import filterReducer from '../../reducer/filter.reducer';
import filterTodos from './todo.filter';

const Todos = () => {
  const initialState = {
    isLoading: true,
    isError: false,
    todos: [],
    newTodoLabel: 'Learn smthing new?'
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const { todos, newTodoLabel, isLoading, isError } = state;
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      await axios
        .get(URL.TODOS)
        .then((res) => res.data)
        .then((result) =>
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: result
          })
        )
        .catch((error) => {
          dispatch({ type: 'FETCH_FAILURE' });
          Error(`Something went wrong... See ${error}`);
        });
    };
    fetchData();
  }, []); // second empty array parameter to encure that useEffect is running once

  const filteredTodos = filterTodos(todos, filter);

  const handleShowAll = () => dispatchFilter({ type: FILTER.SHOW_ALL });
  const handleShowCompleted = () => dispatchFilter({ type: FILTER.SHOW_COMPLETED });
  const handleShowIncompleted = () => dispatchFilter({ type: FILTER.SHOW_INCOMPLETED });
  // we could've used 1 function to make this work
  // const handleFilterDisplay = (filter) => dispatchFilter({type: filter})

  const handleTodoSubmit = (event) => {
    // manque la gestion derreur
    event.preventDefault();
    axios
      .post(URL.TODOS, {
        name: newTodoLabel
      })
      .then((res) => {
        dispatch({
          type: 'ADD_TODO',
          payload: res.data.name
        });
      });
  };

  const handleTodoDelete = (todo) => {
    // manque la gestion derreur
    // const newTodo = filteredTodos.some((el) => el.id === todo.id);
    axios.delete(`${URL.TODOS}/${todo.id}`).then(() =>
      dispatch({
        type: 'REMOVE_TODO',
        payload: todo.id
      })
    );
  };

  return (
    <div className="App-todos">
      {isError ? (
        <h1>Something went wrong...</h1>
      ) : (
        (isLoading && <h1>Loading ...</h1>) || (
          <>
            <div className="App-todo-heading">
              <h1 className="mt-4">You have {filteredTodos.length} to do today</h1>
            </div>
            <div className="App-new-todo">
              <form className="form-inline" onSubmit={handleTodoSubmit}>
                <input
                  className="form-control"
                  type="text"
                  name="todo"
                  value={newTodoLabel}
                  onChange={({ target }) =>
                    dispatch({
                      type: 'UPDATE_TODO_LABEL',
                      payload: target.value
                    })
                  }
                />
                <button className="ml-2 btn btn-primary" type="submit" onClick={(e) => handleTodoSubmit(e)}>
                  Add
                </button>
              </form>
            </div>
            <div className="App-todo-item">
              {filteredTodos.map((todo) => {
                return (
                  <div className="mb-3" key={todo.id}>
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={({ target }) =>
                            dispatch({
                              type: target.checked ? 'COMPLETE_TODO' : 'INCOMPLETE_TODO',
                              payload: todo.id
                            })
                          }
                        />
                      </span>
                      <input
                        className="form-control"
                        name={`todo-${todo.id}`}
                        value={todo.name}
                        onChange={() => {}} // submit
                        onFocus={() => setFocus(true)}
                        onBlur={() => setTimeout(() => setFocus(false), 500)}
                      />
                      {focus ? (
                        <button
                          className="btn btn-sm ml-1 btn btn-success"
                          type="submit"
                          onClick={() => handleTodoSubmit(todo)}
                        >
                          Submit
                        </button>
                      ) : null}
                      {focus ? (
                        <button
                          className="btn btn-sm ml-1 btn btn-danger"
                          type="submit"
                          onClick={() => handleTodoDelete(todo)}
                        >
                          Delete
                        </button>
                      ) : null}
                    </div>
                  </div>
                );
              })}
              <div className="btn-filter">
                <button type="button" className="mr-1 btn btn-primary" onClick={handleShowAll}>
                  Show All
                </button>
                <button type="button" className="mr-1 btn btn-primary" onClick={handleShowCompleted}>
                  Show Complete
                </button>
                <button type="button" className="mr-1 btn btn-primary" onClick={handleShowIncompleted}>
                  Show Incomplete
                </button>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Todos;
