import React from 'react'

class Form extends React.Component{

    render() {
        return (
                <form>
                    <h2>Teacher Enrollment</h2>
                <label>Name<input name="name"/></label>
                <label>Subject<input name="subject"/></label>
                <label>Email<input name="email"/></label>
                <label>Phone<input name="phone"/></label>
                <label>Number<input name="number"/></label>
                <label>Zip Code<input name="zipcode"/></label>
                <button type="submit">Teach Class</button>
                </form>
                )
    }

}

export default Form;