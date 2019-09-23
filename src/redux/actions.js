export const addTodo = todo => ({
  type: 'ADD',
  payload: {todo}
});

export const toggleTodo = id => ({
  type: 'TOGGLE',
  payload: {id}
});

export const toggleView = id => ({
  type: 'TOGGLE_VIEW',
  payload: {id}
});
