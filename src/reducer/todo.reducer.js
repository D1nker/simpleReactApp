export default function todoReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: action.payload
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            name: state.newTodoLabel,
            completed: false,
            editing: false
          }
        ],
        newTodoLabel: ''
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, completed: true } : todo))
      };
    case 'INCOMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, completed: false } : todo))
      };
    case 'UPDATE_TODO_LABEL':
      return {
        ...state,
        newTodoLabel: action.payload
      };
    default:
      return state;
  }
}
