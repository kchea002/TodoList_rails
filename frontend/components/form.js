import React, { useState } from 'react';

const Form = props => {

    const { sublistId, receiveStep } = props




    const [step, setStep] = useState({
        id: uniqueId(),
        title: '',
        description: '',
        todo_id: sublistId
    })

    function uniqueId() {
        return new Date().getTime()
    }

    const handleSubmit = e => {
        e.preventDefault();
        let newStep = Object.assign({}, step, { id: uniqueId() })
        receiveStep(newStep)

    }

    const handleChange = property => {

        return e => {
            let updatedStep = Object.assign({}, step, { [property]: e.target.value })
            setStep(updatedStep)
        }
    }


    return (
        <form style={{ "backgroundColor": "yellow", "height": "100%", "width": "80%", "margin": "auto" }} onSubmit={handleSubmit} >
            <div>
                Title: <input type="text" onChange={handleChange('title')} />
            </div>

            <div>
                Description: <input type="text" onChange={handleChange('description')} />
            </div>
            <button > Create Step</button>
        </form>

    )
}

export default Form;