function Student(props){
    return(
        <div className="student">
            <img src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg" alt="" />
            <p> Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "YES" : "NO"}</p>
            
            
        </div>
    )
}
export default Student;
// This is a functional component that will be used to display the student's information.