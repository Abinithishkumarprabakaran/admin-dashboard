import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddTeacher() {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [skill, setSkill] = useState();
  const [currentBatch, setCurrentBatch] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const addTeacher = async () => {
    const newTeacher = {
      firstName: firstName,
      lastName: lastName,
      skill: skill,
      currentBatch: currentBatch,
      email: email
    };

    await fetch("https://640aa5e981d8a32198cd24c5.mockapi.io/teachers", {
            method: "POST",
            body: JSON.stringify(newTeacher),
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
                />
        <TextField
            onChange={(event) => setLastName(event.target.value)}
            label="Last Name"
            variant="outlined"
                />
        <TextField
            onChange={(event) => setSkill(event.target.value)}
            label="Skill"
            variant="outlined"
                />
        <TextField
            onChange={(event) => setCurrentBatch(event.target.value)}
            label="Batch Assigned"
            variant="outlined"
                />
        <TextField
            onChange={(event) => setEmail(event.target.value)}
            label="Email"
            variant="outlined"
                />

        <Button variant="contained" onClick={addTeacher}>
            Add Teacher
        </Button>
    </div>
  );
}
