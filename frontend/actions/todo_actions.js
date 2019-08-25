export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE TODO';


export const receiveTodos = todos => ({
    type: RECEIVE_TODOS,
    todos
})

export const receiveTodo = todo => ({
    type: RECEIVE_TODO,
    todo
})

export const updateTodo = id => ({
    type: UPDATE_TODO,
    id
})

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
})