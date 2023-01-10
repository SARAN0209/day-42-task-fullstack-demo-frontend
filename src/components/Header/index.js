import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='Header'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg ">
                <a class="navbar-brand" href="/">EMPLOYEES</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <NavLink className="nav-item nav-link active " to="/"> HOME </NavLink>
                            <NavLink className="nav-item nav-link" to="/employees/add">CREATEEMPLOYEES</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};
export default Header;