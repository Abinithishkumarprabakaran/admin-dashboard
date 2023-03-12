import './App.css'
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Home } from './Home';
import { Students } from './Students';
import { Teachers } from './Teachers';
import { Dashboard } from './Dashboard';
import { AddStudent } from './AddStudent';
import { EditStudent } from './EditStudent';
import { AddTeacher } from './AddTeacher';
import { EditTeacher } from './EditTeacher';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <AppBar position="static">
					<Toolbar>
            <Button onClick={() => navigate("/")} color="inherit" >Home</Button>
            <Button onClick={() => navigate("/dashboard")} color="inherit">Dashboard</Button>
            <Button onClick={() => navigate("/students")} color="inherit">Students</Button>
            <Button onClick={() => navigate("/teachers")} color="inherit">Teachers</Button>
				  </Toolbar>
			</AppBar>

      <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/students" element={<Students/>} />
          <Route path="/teachers" element={<Teachers/>}/>
					<Route path="/add-student" element={<AddStudent />} />
          <Route path="/students/:id" element={<EditStudent />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="/teachers/:id" element={<EditTeacher />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App


