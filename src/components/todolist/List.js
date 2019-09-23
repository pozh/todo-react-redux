import React from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import TodoView from './TodoView';

const List = ({todos, selectedTodo}) => {
  if (!todos.length) return <p className="mt-3">Задач на сегодня нет</p>;
  else return (
    <div className="row">
      <div className="col">
        <table className="table mt-4">
          <tbody>
            {todos.length > 0 && todos.map(todo =>
              <Item key={todo.task.toString() + todo.id}
                    todo={todo}
                    isDone={todo.done} // только для форсирования обновления при смене состояния
                    isSelected={selectedTodo && todo.id===selectedTodo.id} />)}
          </tbody>
        </table>
      </div>
      {selectedTodo &&
      <div className="col-md-5">
        <TodoView todo={selectedTodo}/>
      </div>
      }
    </div>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    selectedTodo: state.selectedTodo
  };
}

export default connect(mapStateToProps)(List);
