function filterTodos(todos, filter) {
  const data = todos.filter((todo) => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'COMPLETED' && todo.completed) {
      return true;
    }
    if (filter === 'INCOMPLETED' && !todo.completed) {
      return true;
    }
    return false;
  });
  return data;
}

export default filterTodos;
