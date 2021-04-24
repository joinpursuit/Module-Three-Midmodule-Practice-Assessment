
const AddToClass = ({data, averageGPA}) => {
    console.log({data})
    return (
       <section>
            <h2>Enrolled</h2>
        <ul className="EnrolledList">
            {data.map(addStudent => {
                const { name, GPA, id } = addStudent
                // console.log(addStudent)
                return (
                    <li key={id}> {name}: {GPA.toFixed(2)}</li>
                    )
                })}
            <h3>
            Total Student Count: {data.length}
            </h3>
            <h3>
            Average GPA: {averageGPA.toFixed(2)}
            </h3>
        </ul>
       </section>
    )
}

export default AddToClass