import { useState, useEffect  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function EditTeacher() {

  const {id} = useParams();

  const [teacher, setTeacher] = useState(null)

  useEffect(() => {
    fetch(`https://640aa5e981d8a32198cd24c5.mockapi.io/teachers/${id}`, {method: "GET"})
      .then((data) => data.json())
      .then((val) => setTeacher(val))
  }, [id])

  return teacher ? <EditStudentForm teacher={teacher} id={id} /> : <h2>Loading...</h2>
}

function EditStudentForm({ teacher, id}) {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(`${teacher.firstName}`);
  const [lastName, setLastName] = useState(`${teacher.lastName}`);
  const [skill, setSkill] = useState(`${teacher.skill}`);
  const [currentBatch, setCurrentBatch] = useState(`${teacher.currentBatch}`);
  const [email, setEmail] = useState(`${teacher.email}`);

  const editTeacher = () => {
    const updatedTeacher = {
      firstName: firstName,
      lastName: lastName,
      skill: skill,
      currentBatch: currentBatch,
      email: email
    };
  
    fetch(`https://640aa5e981d8a32198cd24c5.mockapi.io/teachers/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedTeacher),
        headers: {
            "Content-Type": "application/json",
        },
    });

    navigate("/teachers")

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
            onChange={(event) => setSkill(event.target.value)}
            label="Course"
            variant="outlined"
            value={skill}
                />
        <TextField
            onChange={(event) => setCurrentBatch(event.target.value)}
            label="Batch"
            variant="outlined"
            value={currentBatch}
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
          onClick={() => {editTeacher()}}>
            Submit
        </Button>
    </div>
  );
}
