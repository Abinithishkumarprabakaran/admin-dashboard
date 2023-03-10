import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



export function Students() {

  const navigate = useNavigate();

  const [studentsList, setStudentsList] = useState([])

  const getStudents = ()  => {
    fetch("https://640aa5e981d8a32198cd24c5.mockapi.io/students")
      .then((data) => data.json())
      .then((val) => setStudentsList(val))
  }

  useEffect(() => getStudents(), [])

  return (

    <div>

      <div className="add-button">
        <Button 
          variant="contained" 
          sx={{marginLeft:'auto'}}
          onClick={() => { navigate("/add-student"); }}>
          Add a Student
        </Button>
      </div>

      <div className='student'>
        <div className="grid-container">
          <div className="grid-item"><h3>First Name</h3></div>
          <div className="grid-item"><h3>Last Name</h3></div>
          <div className="grid-item"><h3>Course</h3></div>
          <div className="grid-item"><h3>Batch</h3></div>
          <div className="grid-item"><h3>Email</h3></div>
          <div className="grid-item"><h3>Edit / Delete</h3></div>

          {studentsList.map((student, id) => <GridBox key={id} student={student} />)}
      
        </div>
      </div>
    </div>
  );

}
function GridBox({ student }) {

  const navigate = useNavigate();

  return (
    <>
      <div className="grid-item">{student.firstName}</div>
      <div className="grid-item">{student.lastName}</div>
      <div className="grid-item">{student.course}</div>
      <div className="grid-item">{student.batch}</div>
      <div className="grid-item">{student.email}</div>
      <div className="grid-item">
        <IconButton
          color="secondary"
          onClick={() => { navigate("/edit-student"); }}><EditIcon />
        </IconButton>

        <IconButton color="error"><DeleteIcon/></IconButton>
      </div>
    </>
  );
}
