function filterTodos(todos, filter) {
  const data = todos.filter(todo => {
    if ('ALL' === filter) {
      return true;
    }
    if ('COMPLETED' === filter && todo.completed) {
      return true;
    }
    if ('INCOMPLETED' === filter && !todo.completed) {
      return true;
    }
    return false;
  });
  return data;
}

export default filterTodos;
