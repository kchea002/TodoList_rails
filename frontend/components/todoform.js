import React, { useState } from 'react';
import { connect } from 'react-redux';
import { receiveTodo, removeTodo } from '../actions/todo_actions';

const Todoform = props => {

    const [info, setInfo] = useState({
        title: '',
        body: '',
        id: uniqueId(),
        done: false
    })


    function uniqueId() {
        return new Date().getTime()
    }

    const handleSubmit = e => {
        e.preventDefault();
        const nextState = Object.assign({}, info, { id: uniqueId() })
        props.receiveTodo(nextState)
        setInfo()
        document.querySelectorAll('input').forEach(input => input.value = "")
    }

    const handleChange = property => {

        return e => {
            const nextState = Object.assign({}, info, { [property]: e.target.value })
            setInfo(nextState)
        }

    }




    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange('title')} placeholder="title" />
            <input type="text" onChange={handleChange('body')} placeholder="body" />
            <input type="submit" value="submit" />
        </form>
    )


}


const mSTP = state => {
    console.log(state)
    return state
}

const mDTP = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo))
})
export default connect(mSTP, mDTP)(Todoform);