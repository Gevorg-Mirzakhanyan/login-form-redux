import './Header.css';
import { NavLink } from 'react-router-dom';
function Header() {
    return(
        <div>
            <ul className="header-list">
                <li>
                    <NavLink to={'/'}>Add User</NavLink>
                </li>
                <li>
                    <NavLink to={'/Login'}>Login</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;