import Student from "./Student.jsx";

function App() {
  return(
    <>
    <Student name="Dilip" age={22} isStudent={true}/>
    <Student name="vinay" age={22} isStudent={true}/>
    <Student name="sangamesh" age={22} isStudent={true}/>
    <Student name="karthik" age={20} isStudent={false}/>
    </>
  )
}

export default App;