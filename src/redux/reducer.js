const initialState = {
  todos: [],  // {id, task, owner, done}
  selectedTodo: null,
  lastId: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      const newTodo = {...action.payload.todo, id: state.lastId, done: false};
      return {...state, todos: [...state.todos, newTodo], lastId: ++state.lastId};

    case 'TOGGLE':
      const newTodos = [...state.todos];
      let newSelected = null;
      if (state.selectedTodo) {
        newSelected = state.todos.filter(todo=>todo.id===state.selectedTodo.id)[0];
      }
      const idx = newTodos.findIndex(todo => todo.id===action.payload.id);
      newTodos[idx].done = !newTodos[idx].done;
      return {...state, todos: newTodos, selectedTodo: newSelected};

    case 'TOGGLE_VIEW':
      const findId = action.payload.id;
      let selectedForView;
      if (state.selectedTodo && findId === state.selectedTodo.id) selectedForView= null;
      else selectedForView = state.todos.filter(todo=>todo.id===findId)[0];
      return {
        ...state,
        todos: [...state.todos],
        selectedTodo: selectedForView
      };

    default:
      return state;
  }
}
