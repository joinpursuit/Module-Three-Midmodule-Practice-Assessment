import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
        //set the initial state
        super(props)
        console.log('form here',this.props)
    }
    render() {
        return (
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                />
            
                <label htmlFor='name'>Subject</label>
                <input
                    type='text'
                    name='subject'
                />

                <label htmlFor='name'>Email</label>
                <input
                    type='text'
                    name='email'
                />

                <label htmlFor='zip'>Zip Code</label>
                <input
                    type='text'
                    name='zip'
                />

                <label htmlFor='name'>Phone Number</label>
                <input
                    type='text'
                    name='phone'
                />
            </div>
        )
    }
}
