import React from 'react';
import { connect } from 'react-redux';
import Sublist from './sublist';
import Form from './form';
import { receiveStep, removeStep } from '../actions/step_actions';

const Dropdown = props => {
    const { sublistId, steps, receiveStep, removeStep } = props

    return (
        <>
            <Form sublistId={sublistId} receiveStep={receiveStep} />
            {steps && steps.map(step => {
                return <Sublist key={step.id} step={step} removeStep={removeStep} />

            })}
        </>
    )
}

const mSTP = (state, props) => {
    let sublistId = props.info.id
    let filtered = Object.values(state.steps).filter(step => {
        return step.todo_id === sublistId
    })
    return {
        steps: filtered,
        sublistId
    }
}

const mDTP = dispatch => ({
    receiveStep: step => dispatch(receiveStep(step)),
    removeStep: id => dispatch(removeStep(id))
})


export default connect(mSTP, mDTP)(Dropdown)
