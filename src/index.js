import React from 'react'
import ReactDom from 'react-dom'
import Header from "./header";
import Footer from './footer';
import Employees from './Employees';
import './style.css';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import { useState, useEffect } from "react";
import { HashRouter, Route, Link, Routes } from 'react-router-dom';

function App() {

    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

    const [Employeees, setEmployeees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{ 
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
    }])
    
    useEffect(() => {

      localStorage.setItem('employeeList', JSON.stringify(Employeees))

    }, [Employeees]);

    useEffect(() => {

      localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))

    }, [selectedTeam]);

    function handleTeamSelectionChange(event) {
      console.log(event.target.value);
      setTeam(event.target.value);

    }

    function handleEmployeeCardClick(event) {
      const transformedEmployees =  Employeees.map((emp) => emp.id == parseInt(event.currentTarget.id)
                                    ?(emp.teamName === selectedTeam)? {...emp, teamName: ''} : {...emp, teamName: selectedTeam} : emp);
      setEmployeees(transformedEmployees);
    }

    return (
        <div>
          <HashRouter basename='/'>
            <Nav/>
            <Header selectedTeam = {selectedTeam}
            teamMemberCount = {Employeees.filter((emp) => emp.teamName === selectedTeam).length}/>
            
            <Routes>
              <Route path='/'
              element = {<Employees Employeees = {Employeees}
              selectedTeam = {selectedTeam}
              handleEmployeeCardClick = {handleEmployeeCardClick}
              handleTeamSelectionChange = {handleTeamSelectionChange}
              />}>
              </Route>
              <Route path='/GroupedTeamMembers'
              element = {<GroupedTeamMembers Employeees={Employeees} selectedTeam={selectedTeam} setTeam={setTeam}/>}>
              </Route>
              <Route path='*'
              element = {<Employees Employeees = {Employeees}
              selectedTeam = {selectedTeam}
              handleEmployeeCardClick = {handleEmployeeCardClick}
              handleTeamSelectionChange = {handleTeamSelectionChange}
              />}>
              </Route>
            </Routes>
            <Footer/>
            </HashRouter>
        </div>
    )
}



export default App
ReactDom.render(
    <App />
, document.querySelector("#root"))