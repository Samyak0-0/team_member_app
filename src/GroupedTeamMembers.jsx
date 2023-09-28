import { useState } from "react";

const GroupedTeamMembers = ({Employeees, selectedTeam, setTeam}) => {
    
    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers() {
       let teams=[];

       let teamAMembers = Employeees.filter((emp) => emp.teamName === 'TeamA')
       let teamA = {team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA'? false: true}
       teams.push(teamA)

       let teamBMembers = Employeees.filter((emp) => emp.teamName === 'TeamB')
       let teamB = {team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB'? false: true}
       teams.push(teamB)

       let teamCMembers = Employeees.filter((emp) => emp.teamName === 'TeamC')
       let teamC = {team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC'? false: true}
       teams.push(teamC)

       let teamDMembers = Employeees.filter((emp) => emp.teamName === 'TeamD')
       let teamD = {team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD'? false: true}
       teams.push(teamD)
      
       return teams;
       
    }

    function handleTeamClick(event) {
        let transfromedGroupData = groupedEmployees.map((emp) => (emp.team == event.currentTarget.id)? 
                                                        {...emp, collapsed: !emp.collapsed}: emp)

        setGroupedData(transfromedGroupData)
        setTeam(event.currentTarget.id);
    }   

    console.log(groupedEmployees)
   
    return (
        <main>
            {
                groupedEmployees.map((items) => {
                    return (
                        <div id="wrapper" key={items.team}>
                            <h3 id={items.team} onClick={handleTeamClick}style={{cursor: "pointer"}}>
                                Team Name: {items.team}
                                
                            </h3>
                            {/* {console.log(items.team)} */}
                            <div id={"collapse-" + items.team} className={items.collapsed === true? "collapsed": " "}>
                              
                                {
                                    items.members.map((emp) => {
                                        return (
                                            <div className={items.collapsed === false? "group-data": " "}>
                                                <p>Full Name: {emp.fullName}</p>
                                                <p>Designation: {emp.designation}</p>
                                                <p>Gender: {emp.gender}</p>
                                                <p>Team Name: {emp.teamName}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default GroupedTeamMembers;