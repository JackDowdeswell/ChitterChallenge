import React from 'react'
import { useState } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import axios from 'axios';

export default function LogIn({ setLoginUser }) {
    const [user, setUser] = useState({
        username: ``,
        password: ``
    });
    const [loggedIn, setLoggedIn] = useState(false);

    const location = useLocation();

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();

        const res = await axios.post(`/login`, user);
        alert(res.data.message);
        setLoggedIn(res.data.user ? true : false);
        setLoginUser(res.data.user);
    };
    return (
        <>
            {loggedIn && <Navigate to="/" state={{ from: location }} />}
            <form onSubmit={login}>
                <div className=" signUp displayPeeps container shadow-sm p-3 mb-5 bg-warning rounded">
                    <h1>Log in</h1>
                    <p>Please enter your details below to log in.</p>
                    <label className="signUpField"><b>Username:</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required value={user.username} onChange={handleChange} /><br></br>

                    <label className="signUpField"><b>Password:</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required value={user.password} onChange={handleChange} />

                    <div className="clearfix">
                        <button type="submit" className="signupbtn">Log in</button>
                    </div>
                    <Link to="/signup">
                        <button type="button" className="signupbtn">Don't have an account? Sign up!</button>
                    </Link>
                </div>
            </form>
        </>
    )
}