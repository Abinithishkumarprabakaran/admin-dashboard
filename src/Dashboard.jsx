import { useEffect, useState } from "react";

export function Dashboard() {

  const [studentsList, setStudentsList] = useState([])

  const [teachersList, setTeachersList] = useState([])

  const getStudents = ()  => {
    fetch("https://640aa5e981d8a32198cd24c5.mockapi.io/students")
      .then((data) => data.json())
      .then((val) => setStudentsList(val))
  }

  useEffect(() => getStudents(), [])

  const getTeachers = ()  => {
    fetch("https://640aa5e981d8a32198cd24c5.mockapi.io/teachers")
      .then((data) => data.json())
      .then((val) => setTeachersList(val))
  }

  useEffect(() => getTeachers(), [])

  return (
    <div className="dashboard">
        <h3>Number of Students: {studentsList.length}</h3>
        <h3>Number of Teachers: {teachersList.length}</h3>
    </div>
  );
}
