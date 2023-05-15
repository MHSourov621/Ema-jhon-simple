import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => [
        logout()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    ]
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/Order">Order</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Signup">SignUp</Link>
                {user && <><span className='user'>{user.email}</span>
                    <button onClick={handleLogout}>Sign Out</button></>}
            </div>
        </nav>
    );
};

export default Header;