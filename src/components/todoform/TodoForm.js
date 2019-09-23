import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../redux/actions'

import './todoform.scss';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: {
        task: '',
        owner: '',
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange(event) {
    const { target: { name, value } } = event;
    console.log(name, value);
    this.setState(prevState => ({ todo: {...prevState.todo, [name]: value }}));
  }

  handleButton() {
    const {addTodo} = this.props;
    addTodo(this.state.todo);
    this.setState(prevState => ({...prevState, todo: {task:'', owner:''}}));
  }

  handleKeyUp(event) {
    if (event.keyCode !== 13) return;
    if (!this.state.todo.task || !this.state.todo.owner) return;

    const {addTodo} = this.props;
    addTodo(this.state.todo);
    this.setState(prevState => ({...prevState, todo: {task:'', owner:''}}));
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="col-md-5 col-lg-6">
            <input type="text" className="form-control"
                   name="task"
                   value={this.state.todo.task}
                   onKeyUp={this.handleKeyUp}
                   onChange={this.handleChange}
                   placeholder="Для добавления задачи жмите Enter..." />
          </div>
          <div className="col-md-3 col-lg-4">
            <input type="text" className="form-control"
                   name="owner"
                   value={this.state.todo.owner}
                   onKeyUp={this.handleKeyUp}
                   onChange={this.handleChange}
                   placeholder="Ответственный..." />
          </div>
          <div className="col d-none d-md-block">
            <button type="button"
                    onClick={this.handleButton}
                    disabled={!this.state.todo.task || !this.state.todo.owner}
                    className="btn btn-primary btn-block">Добавить</button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(null, {addTodo})(TodoForm);
