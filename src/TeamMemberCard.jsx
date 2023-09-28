import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";


const TeamMemberCard = ({emp, selectedTeam, handleEmployeeCardClick}) => {
    return (
        <div id={emp.id} key={emp.id} className={(emp.teamName === selectedTeam)? "card-selected" : "card-unselected" } style={{ cursor:"pointer" }} onClick={handleEmployeeCardClick}>

              {(emp.gender === "male")? <img src={maleProfile} className="pfp"></img> : <img src={femaleProfile} className="pfp"></img>}
                
                <div className="card-body">
                <p>Full Name: {emp.fullName}</p>
                <p>Designation: {emp.designation}</p>
                <p>Gender: {emp.gender}</p>
                <p>Team Name: {emp.teamName}</p>
                </div>
            </div>
    )
}

export default TeamMemberCard