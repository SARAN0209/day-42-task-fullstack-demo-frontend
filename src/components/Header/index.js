 import {NavLink} from 'react-router-dom';
 const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <h1>EMPLOYEES</h1>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink className="nav-item nav-link active" to="/"> Home </NavLink>
                        <NavLink className="nav-item nav-link" to="/employees/add">CreateEmployees</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
};
export default Header;