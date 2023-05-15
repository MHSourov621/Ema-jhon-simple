import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Signup0 = () => {
    const [error, setError] = useState("");
    const {createUser} = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError("")
        if (password !== confirm) {
            setError("Your password did not match")
            return
        }
        else if (password.length < 6) {
            setError("Password must be 6 character or longer")
            return
        }
        console.log(email, password, confirm);

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })

    }
    return (
        <div className="form-container">
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="confirm" name='confirm' required />
                </div>
                <div className="form-control">
                    <button className='btn-submit'>Login</button>
                </div>
            </form>
            <p><small>Already have an account?</small><Link to="/login">Login</Link></p>
            <div className='error-show'>
                {error}
            </div>
        </div>
    );
};

export default Signup0;