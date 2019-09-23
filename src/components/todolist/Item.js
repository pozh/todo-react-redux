import React from 'react';
import {connect} from 'react-redux';
import {toggleView, toggleTodo} from "./../../redux/actions";
import './item.scss';

const Item = ({todo, isSelected, toggleView, toggleTodo}) => {
  let rootClassName = isSelected ? 'item item-selected' : 'item';
  if (todo.done) rootClassName += ' item-done';
  return (
    <tr className={rootClassName}>
      <th scope="row" className="item__id">#{todo.id}</th>
      <td className="item__task" onClick={() => toggleTodo(todo.id)}>{todo.task}</td>
      <td className="item__owner text-nowrap text-right" onClick={() => toggleTodo(todo.id)}>{todo.owner}</td>
      <td className="text-right">
        <button type="button" className="btn btn-primary"
                onClick={() => toggleView(todo.id)}>{isSelected ? '«' : '»'}</button>
      </td>
    </tr>
  );
};

export default connect(null, {toggleView, toggleTodo})(Item);
