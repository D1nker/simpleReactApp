export default function todoReducer(state, action) {
  let todo;
  switch (action.type) {
    case 'INIT':
      return {
        todos: action.payload,
      };
    case 'DO_TODO':
     todo = state.todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: true };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todo,
      }
    case 'UNDO_TODO':
       todo = state.todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: false };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todo,
      }
    case 'ADD_TODO':
      return state.concat({
        task: action.task,
        id: action.id,
        completed: false,
      });
    default:
      throw new Error();
  }
};
