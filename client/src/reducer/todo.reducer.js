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
            title: action.title,
            completed: false,
            _id: action._id
          }
        ],
        newTodoLabel: ''
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload)
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => (todo._id === action.payload ? { ...todo, completed: true } : todo))
      };
    case 'INCOMPLETE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => (todo._id === action.payload ? { ...todo, completed: false } : todo))
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
