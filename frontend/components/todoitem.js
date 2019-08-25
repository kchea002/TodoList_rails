import React, { useState } from 'react';
import Dropdown from './dropdown';
import TodoModal from './todomodal';

const TodoItem = props => {
    const [dropdown, setDropdown] = useState(false)
    const [modal, setModal] = useState(false)

    const { receiveTodo } = props


    const handleRemove = e => {
        props.removeTodo(props.info.id)
    }

    const handleDone = () => {
        const toggle = Object.assign({}, props.info, { done: !props.info.done })
        receiveTodo(toggle)
    }

    const handleModal = () => {
        modal ? setModal(false) : setModal(true)
    }

    const openDropdown = () => {
        dropdown ? setDropdown(false) : setDropdown(true);
    }


    return (
        <div style={{ "backgroundColor": "red" }}>
            <h1 onClick={openDropdown}> {props.info.title} </h1>
            <h2> {props.info.body} </h2>
            {dropdown ? <Dropdown info={props.info} /> : null}
            {modal ? <TodoModal handleModal={handleModal} receiveTodo={receiveTodo} info={props.info} /> : null}

            <div onClick={handleDone} style={{ "backgroundColor": "blue", "width": "50px", "height": "100%", "margin": "auto", "borderRadius": "6px", "padding": "5px" }}> {props.info.done ? "UNDO" : "DONE?"}</div>
            <button onClick={handleModal} className="btn btn-sm btn-outline-secondary" >UPDATE </button>
            <div onClick={handleRemove} style={{ "backgroundColor": "yellow", "width": "90px" }} > REMOVE </div>
        </div>
    )
}


export default TodoItem; 