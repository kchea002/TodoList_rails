import React, { useState } from 'react';
// import { receiveTodo } from '../actions/todo_actions';

const TodoModal = props => {

    const { receiveTodo } = props
    const [item, setItem] = useState({
        title: '',
        body: '',
        id: props.info.id,
        done: props.info.done
    })


    const handleChange = property => {
        return e => {
            let updatedItem = Object.assign({}, item, { [property]: e.target.value })
            setItem(updatedItem)
        }
    }


    const handleSubmit = e => {
        e.preventDefault();
        props.handleModal()
        receiveTodo(item)
        console.log('item', item);
    }


    return (
        <div style={{ "position": "fixed", "margin": "auto", "backgroundColor": "green", "height": "200px", "width": "200px", "left": "50%", "top": "50%", "transform": "translate(-50%, -50%)" }}>
            <form onSubmit={handleSubmit}>
                Update Todo
             <input onChange={handleChange('title')} />
                <input onChange={handleChange('body')} />
                <button>UPDATE</button>
            </form>
        </div>
    )
}

export default TodoModal;