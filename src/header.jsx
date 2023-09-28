const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <header className="header">
            <h1>Team Member Allocation</h1>
            <h2>{selectedTeam} has {teamMemberCount} {(teamMemberCount === 1)? "member": "members"}.</h2>
        </header>
    )
}

export default Header