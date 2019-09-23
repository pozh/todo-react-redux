import React from 'react';
import './todoview.scss';

const TodoView = ({todo}) => {
  const {id, task, owner, done} = todo;
  return (
    <div className="mt-4">
      <h5>#{id}</h5>
      <p>
        {task}
        <br />
        <i>{owner}</i>
      </p>
      <p className="font-weight-bold">
        {done && <span className="text-success">Сделано</span>}
        {!done && <span className="text-danger">Не сделано</span>}
      </p>
    </div>
  );
};

export default TodoView;
