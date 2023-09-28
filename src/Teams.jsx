const Teams = ({selectedTeam, handleTeamSelectionChange}) => {
    return (
        <div className="drop-down">
          <select value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>

          </select>
        </div>
    )
}

export default Teams