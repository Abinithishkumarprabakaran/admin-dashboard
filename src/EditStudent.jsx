import { useState, useEffect  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function EditStudent() {

  const {id} = useParams();

  const [student, setStudent] = useState(null)

  useEffect(() => {
    fetch(`https://640aa5e981d8a32198cd24c5.mockapi.io/students/${id}`, {method: "GET"})
      .then((data) => data.json())
      .then((val) => setStudent(val))
  }, [id])

  return student ? <EditStudentForm student={student} id={id} /> : <h2>Loading...</h2>
}

function EditStudentForm({ student, id}) {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(`${student.firstName}`);
  const [lastName, setLastName] = useState(`${student.lastName}`);
  const [course, setCourse] = useState(`${student.course}`);
  const [batch, setBatch] = useState(`${student.batch}`);
  const [email, setEmail] = useState(`${student.email}`);

  const editStudent = () => {
    const updatedStudent = {
      firstName: firstName,
      lastName: lastName,
      course: course,
      batch: batch,
      email: email
    };
  
    fetch(`https://640aa5e981d8a32198cd24c5.mockapi.io/students/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedStudent),
        headers: {
            "Content-Type": "application/json",
        },
    });

    navigate("/students")

  }

  return (
    <div className="add-form">
        <TextField
            onChange={(event) => setFirstName(event.target.value)}
            label="First Name"
            variant="outlined"
            value={firstName}
                />
        <TextField
            onChange={(event) => setLastName(event.target.value)}
            label="Last Name"
            variant="outlined"
            value={lastName}
                />
        <TextField
            onChange={(event) => setCourse(event.target.value)}
            label="Course"
            variant="outlined"
            value={course}
                />
        <TextField
            onChange={(event) => setBatch(event.target.value)}
            label="Batch"
            variant="outlined"
            value={batch}
                />
        <TextField
            onChange={(event) => setEmail(event.target.value)}
            label="Email"
            variant="outlined"
            value={email}
                />

        <Button 
          variant="contained" 
          color="success" 
          onClick={() => {editStudent()}}>
            Submit
        </Button>
    </div>
  );
}
