import React from 'react'

const Form = () => {

    return (
        <div>
            <label for='name'>Name</label>
            <input
                type='text'
                name='name'
            />
            
            <label for='name'>Subject</label>
            <input
                type='text'
                name='subject'
            />

            <label for='name'>Email</label>
            <input
                type='text'
                name='email'
            />

            <label for='zip'>Zip Code</label>
            <input
                type='text'
                name='zip'
            />

            <label for='name'>Phone Number</label>
            <input
                type='text'
                name='phone'
            />  
        </div>
    )
}

export default Form;
 