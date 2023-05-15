import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const [show, setShow] = useState(false)

    const from = location.state?.from?.pathname || '/'

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="form-container">
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type={show ? 'text' : 'password'} name='password' required />
                </div>
                <p onClick={() => setShow(!show)}><small>
                {
                    show ? <span>Hide Password</span> : <span>Show Password</span>
                }
                </small></p>
                <div className="form-control">
                    <button className='btn-submit'>Login</button>
                </div>
            </form>
            <p><small>New in Ema-John?</small><Link to="/signUp">Sign Up</Link></p>
        </div>
    );
};

export default Login;