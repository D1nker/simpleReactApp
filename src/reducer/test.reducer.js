export function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return {
        ...state,
        data: action.payload,
        nextTodoId: action.payload.length
      };
    case 'add':
      return {
        data: [
          ...state.todos,
          {
            id: state.nextTodoId,
            label: state.newTodoLabel,
            done: false
          }
        ],
        nextTodoId: state.nextTodoId + 1,
        newTodoLabel: ''
      };
    case 'remove':
      return {
        ...state,
        data: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'markAsDone':
      return {
        ...state,
        data: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, done: true } : todo
        )
      };
    case 'markAsNotDone':
      return {
        ...state,
        data: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, done: false } : todo
        )
      };
    case 'updateLabel':
      return {
        ...state,
        newTodoLabel: action.payload
      };
    default:
      return state;
  }
};
