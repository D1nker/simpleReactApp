import React, { useEffect, useReducer, useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
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
    nextTodoId: 0,
    newTodoLabel: 'Learn smthing new ?'
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const { todos, newTodoLabel, isLoading, isError } = state;

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      await fetch(URL.TODOS_URL)
        .then((res) => res.json())
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

  return (
    <div className="App-todos">
      {isError && <h1>Something went wrong...</h1>}
      {(isLoading && <h1>Loading ...</h1>) || (
        <>
          <h1>You have {filteredTodos.length} to do today</h1>
          <div className="App-new-todo">
            <Form inline>
              <InputGroup>
                <FormControl
                  type="text"
                  name="task"
                  value={newTodoLabel}
                  onChange={({ target }) =>
                    dispatch({
                      type: 'UPDATE_TODO_LABEL',
                      payload: target.value
                    })
                  }
                />
              </InputGroup>
              <Button
                bsstyle="primary"
                className="ml-2"
                type="submit"
                onClick={() => dispatch({ type: 'ADD_TODO' })}
              >
                Add
              </Button>
            </Form>
          </div>

          <div className="App-todo-item">
            {filteredTodos.map((todo) => {
              return (
                <InputGroup className="mb-3" key={todo.id}>
                  <InputGroup.Prepend>
                    <InputGroup.Checkbox
                      checked={todo.completed}
                      onChange={({ target }) =>
                        dispatch({
                          type: target.checked ? 'COMPLETE_TODO' : 'INCOMPLETE_TODO',
                          payload: todo.id
                        })
                      }
                    />
                  </InputGroup.Prepend>
                  <FormControl
                    name={`todo-${todo.id}`}
                    value={todo.name}
                    onChange={() => {}} // submit
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                  />
                  {focus ? (
                    <Button className="btn btn-sm ml-2 mr-2" variant="success" type="submit">
                      Submit
                    </Button>
                  ) : null}
                  {focus ? (
                    <Button className="btn btn-sm mr-2" variant="danger" type="submit">
                      Delete
                    </Button>
                  ) : null}
                </InputGroup>
              );
            })}
            <div className="btn-filter">
              <Button className="mr-1" onClick={handleShowAll}>
                Show All
              </Button>
              <Button className="mr-1" onClick={handleShowCompleted}>
                Show Complete
              </Button>
              <Button className="mr-1" onClick={handleShowIncompleted}>
                Show Incomplete
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Todos;
