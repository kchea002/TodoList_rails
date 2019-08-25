import React from 'react';
import '../../../src/App.css';
import { connect } from 'react-redux'
import { receiveTodo, removeTodo, updateTodo } from '../actions/todo_actions';
import TodoItem from './todoitem';
import TodoForm from './todoform';

function App(props) {

  const allTodos = Object.values(props.todos);
  const { updateTodo, receiveTodo, removeTodo } = props

  return (
    <div className="App">
      <TodoForm />
      {allTodos.map(todo => {
        return <TodoItem key={todo.id} info={todo} height="20" length="80vw" receiveTodo={receiveTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
      })}
    </div>


  );
}



const mSTP = state => {

  return state
}


const mDTP = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  uptdateTodo: id => dispatch(updateTodo(id))
})

export default connect(mSTP, mDTP)(App)

// export default C;
