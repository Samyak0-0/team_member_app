import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/GroupedTeamMembers">Teams</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav