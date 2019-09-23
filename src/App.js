import React from 'react';
// import QuoteList from './components/quotes/QuoteList';
// import QuoteView from './components/quotes/QuoteView';
import TodoForm from './components/todoform/TodoForm';
import List from './components/todolist/List';

import './app.scss';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="card">
          <div className="card-header">
            Задания на сегодня
          </div>
          <div className="card-body">
            <TodoForm/>
            <List/>
          </div>
          <div className="card-footer">
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
