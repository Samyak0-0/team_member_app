import TeamMemberCard from "./TeamMemberCard"

const TeamMembers = ({Employeees, selectedTeam, handleEmployeeCardClick}) => {
    return (
        Employeees.map((emp) => (
            <TeamMemberCard emp={emp} handleEmployeeCardClick ={handleEmployeeCardClick} selectedTeam={selectedTeam} ></TeamMemberCard>
          ))
    )
}

export default TeamMembers