import React from 'react';

const Sublist = props => {
    console.log('props', props);
    const { removeStep, step } = props

    const handleDelete = () => {
        removeStep(step.id)
    }

    return (
        <>
            <div>title: {props.step.title}  </div>
            <div>description: {props.step.description}  </div>
            <input type="button" value="delete" onClick={handleDelete} />
        </>
    )
}


export default Sublist;