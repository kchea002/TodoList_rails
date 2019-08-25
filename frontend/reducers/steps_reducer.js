import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';



const initialState = {
    1: {
        id: 1,
        title: 'finish react',
        description: 'do more projects',
        todo_id: 1
    },
    2: {
        id: 2,
        title: 'wash dog',
        description: 'with shampoo',
        todo_id: 1
    }
};



const stepsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case RECEIVE_STEPS:

            action.steps.forEach(step => {
                newState[step.id] = step
            })
            return newState;
        case RECEIVE_STEP:
            newState[action.step.id] = action.step
            return {
                ...state,
                ...newState
            }
        case REMOVE_STEP:
            let oldState = Object.assign({}, state)
            delete oldState[action.id]
            return oldState
        default:
            return state;
    }

}


export default stepsReducer;