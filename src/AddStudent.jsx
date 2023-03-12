import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddStudent() {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [course, setCourse] = useState();
  const [batch, setBatch] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const addStudent = async () => {
    const newStudent = {
      firstName: firstName,
      lastName: lastName,
      course: course,
      batch: batch,
      email: email
    };

    await fetch("https://640aa5e981d8a32198cd24c5.mockapi.io/students", {
            method: "POST",
            body: JSON.stringify(newStudent),
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
                />
        <TextField
            onChange={(event) => setLastName(event.target.value)}
            label="Last Name"
            variant="outlined"
                />
        <TextField
            onChange={(event) => setCourse(event.target.value)}
            label="Course"
            variant="outlined"
                />
        <TextField
            onChange={(event) => setBatch(event.target.value)}
            label="Batch"
            variant="outlined"
                />
        <TextField
            onChange={(event) => setEmail(event.target.value)}
            label="Email"
            variant="outlined"
                />

        <Button variant="contained" onClick={addStudent}>
            Add Student
        </Button>
    </div>
  );
}