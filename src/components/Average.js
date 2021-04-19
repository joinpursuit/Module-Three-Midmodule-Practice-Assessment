import React from "react"

class Average extends React.Component{
constructor(props){
    super(props)
}
render(){
    return (


        <div>


<p>Total Student Count: {this.props.totalClass}</p>

<p>Average GPA: {this.props.average.toFixed(2)}</p>


        </div>
    )
}

}


export default Average