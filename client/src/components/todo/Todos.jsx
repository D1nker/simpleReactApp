import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import '../../assets/css/App.css';
import { URL, FILTER } from '../../app.constant';
import todoFilter from './todo.filter';
import { todoReducer, filterReducer } from '../../reducer';

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

  // useRef
  // Suspense
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      await axios
        .get(URL.GET_TODOS)
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

  const filteredTodos = todoFilter(todos, filter);

  const handleShowAll = () => dispatchFilter({ type: FILTER.SHOW_ALL });
  const handleShowCompleted = () => dispatchFilter({ type: FILTER.SHOW_COMPLETED });
  const handleShowIncompleted = () => dispatchFilter({ type: FILTER.SHOW_INCOMPLETED });
  // we could've used 1 function to make this work
  // const handleFilterDisplay = (filter) => dispatchFilter({type: filter})

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    axios
      .post(URL.ADD_TODOS, { title: newTodoLabel })
      .then((res) => dispatch({ type: 'ADD_TODO', title: newTodoLabel, _id: res.data._id }));
  };

  const handleCheckboxChange = (todo) => {
    axios.put(`${URL.UPDATE_TODOS}${todo._id}`, { completed: !todo.completed }).then(() => {
      dispatch({
        type: todo.completed ? 'INCOMPLETE_TODO' : 'COMPLETE_TODO',
        payload: todo._id
      });
    });
  };

  // mettre des icones de croix au lieu de btn
  const handleTodoDelete = (todo) => {
    // manque la gestion d'erreur
    // const newTodo = filteredTodos.some((el) => el.id === todo.id);
    axios.delete(`${URL.DELETE_TODOS}${todo._id}`).then(() =>
      dispatch({
        type: 'REMOVE_TODO',
        payload: todo._id
      })
    );
  };

  return (
    <div className="App-todos">
      {isError ? (
        <div className="App-error">
          <h1>Something went wrong...</h1>
        </div>
      ) : (
        (isLoading && (
          <div className="App-loading">
            <h1>Loading ...</h1>
          </div>
        )) || (
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
                  <div className="mb-3" key={todo._id}>
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => handleCheckboxChange(todo)}
                        />
                      </span>
                      <input className="form-control" name="todo" type="text" defaultValue={todo.title} />
                      <button
                        className="btn btn-sm ml-1 btn btn-warning"
                        type="submit"
                        onClick={() => handleTodoDelete(todo)}
                      >
                        Delete
                      </button>
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
