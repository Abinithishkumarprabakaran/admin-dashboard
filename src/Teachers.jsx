import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



export function Teachers() {

  const navigate = useNavigate();

  const [teachersList, setTeachersList] = useState([])

  const getTeachers = ()  => {
    fetch("https://640aa5e981d8a32198cd24c5.mockapi.io/teachers")
      .then((data) => data.json())
      .then((val) => setTeachersList(val))
  }

  useEffect(() => getTeachers(), [])

  return (

    <div>

      <div className="add-button">
        <Button 
          variant="contained" 
          sx={{marginLeft:'auto'}}
          onClick={() => { navigate("/add-teacher"); }}>
          Add a Teacher
        </Button>
      </div>

      <div className='student'>
        <div className="grid-container">
          <div className="grid-item"><h3>First Name</h3></div>
          <div className="grid-item"><h3>Last Name</h3></div>
          <div className="grid-item"><h3>Skill</h3></div>
          <div className="grid-item"><h3>Batch Assigned</h3></div>
          <div className="grid-item"><h3>Email</h3></div>
          <div className="grid-item"><h3>Edit / Delete</h3></div>

          {teachersList.map((teacher) => <GridBox teacher={teacher} />)}

        </div>
      </div>
    </div>
  );

}
function GridBox({ teacher }) {

  const navigate = useNavigate();

  return (
    <>
      <div className="grid-item">{teacher.firstName}</div>
      <div className="grid-item">{teacher.lastName}</div>
      <div className="grid-item">{teacher.skill}</div>
      <div className="grid-item">{teacher.currentBatch}</div>
      <div className="grid-item">{teacher.email}</div>
      <div className="grid-item">
      <IconButton
          color="secondary"
          onClick={() => { navigate("/edit-teacher"); }}><EditIcon />
        </IconButton>

        <IconButton color="error"><DeleteIcon/></IconButton>
      </div>
    </>
  );
}
