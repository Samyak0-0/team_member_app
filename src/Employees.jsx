import React, { useState } from "react";
import TeamMemberCard from "./TeamMemberCard";
import TeamMembers from "./TeamMembers";

import Teams from "./Teams";

const Employees = ({Employeees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
  
    return (
      <main className="container">
        
        <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}></Teams>
        <div className="card-collection">
          
            <TeamMembers Employeees={Employeees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam}></TeamMembers>
          
        </div>
      </main>
    )
}

export default Employees