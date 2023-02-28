import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import data from "../data/data";
import Home from "../Home";
import Studentpage from "../StudentPages";
import ScoresPerAssignment from "../ScoresPerAssignment";
import studentProfiles from "../data/dataStudentProfiles";

const App = () => {
  const [state] = useState(data);
  const [selectedAssignment, setStateSelectedAssignment] = useState([]);
  const [difficulty, setStateDifficulty] = useState(true);
  const [fun, setStateFun] = useState(true);

  const numberedData = state.map((student) => ({
    name: student.name,
    assignment: student.assignment,
    difficulty: parseInt(student.difficulty),
    fun: parseInt(student.fun),
  }));

  const getStudent = (student) => {
    return numberedData.filter((item) => item.name === student);
  };

  const getAssignment = (assignment) => {
    const selectedAssignment = numberedData.filter(
      (item) => item.assignment === assignment
    );
    setStateSelectedAssignment(selectedAssignment);
  };

  const allStudents = state.map((data) => data.name);
  const allIndividualStudents = [...new Set(allStudents)];
  const allAssignments = state.map((data) => data.assignment);
  const allIndividualAssignments = [...new Set(allAssignments)];

  const studentProfile = studentProfiles.map((student, key) => (
    <div className="student-profile" key={allIndividualStudents[key]}>
      <img src={`${student.photo}`} alt="Profile" />
      <p className="student-name">
        {allIndividualStudents[key]} {student.lastName}
      </p>
      <div className="student-info">
        <p>{student.age} jaar</p>
        <p>{student.phoneNumber}</p>
        <p>{student.email}</p>
      </div>
    </div>
  ));

  const linkStudents = allIndividualStudents.map((student) => (
    <li key={student} className="students">
      <Link to={`/${student}`}>{student}</Link>
    </li>
  ));

  const routeStudents = allIndividualStudents.map((student) => (
    <Route
      path={`/${student}`}
      key={student}
      element={
        <Studentpage
          student={student}
          getStudent={getStudent}
          assignments={allIndividualAssignments}
          studentProfiles={studentProfile}
          difficulty={difficulty}
          setStateDifficulty={setStateDifficulty}
          fun={fun}
          setStateFun={setStateFun}
        />
      }
    />
  ));

  const getAverageScores = (assignment, typeOfScore) => {
    const filteredData = numberedData
      .filter((item) => item.assignment === assignment)
      .map((score) => score[typeOfScore]);
    const averageScore =
      filteredData.reduce((a, b) => a + b) / filteredData.length;
    return averageScore;
  };

  const averageScores = allIndividualAssignments.map((assignment) => ({
    assignment: assignment,
    difficulty: getAverageScores(assignment, "difficulty"),
    fun: getAverageScores(assignment, "fun"),
  }));

  return (
    <BrowserRouter>
      <div className="container">
        <nav className="nav">
          <div>
            <ul>
              <li className="home">
                <Link className="home-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="assignments">
                <Link to="/score-per-assignment" className="home-link">
                  Assignments
                </Link>
              </li>
              <li className="home">
                <Link className="students-link" to="/">
                  Students
                </Link>
              </li>
              {linkStudents}
            </ul>
          </div>
        </nav>
        <main>
          <Routes>
            {routeStudents}
            <Route
              path="/score-per-assignment"
              element={
                <ScoresPerAssignment
                  filterAssignments={getAssignment}
                  dataSelectedAssignment={selectedAssignment}
                  assignments={allIndividualAssignments}
                  students={allIndividualStudents}
                />
              }
            />
            <Route
              path="/"
              element={
                <Home
                  dataAverageScore={averageScores}
                  filterAssignments={getAssignment}
                  dataSelectedAssignment={selectedAssignment}
                  assignments={allIndividualAssignments}
                  students={allIndividualStudents}
                  difficulty={difficulty}
                  setStateDifficulty={setStateDifficulty}
                  fun={fun}
                  setStateFun={setStateFun}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
