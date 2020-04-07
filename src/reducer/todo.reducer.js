export default function todoReducer(state, action) {
  console.log(state, 'STATE du reducer');
  console.log(action, 'ACTION du reducer');
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: true };
        } else {
          return todo;
        }
      });
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: false };
        } else {
          return todo;
        }
      });
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
