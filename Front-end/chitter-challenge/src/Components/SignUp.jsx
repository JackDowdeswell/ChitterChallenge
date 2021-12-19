import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
    const [user, setUser] = useState({
        username: ``,
        password: ``,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const signUp = async (e) => {
        e.preventDefault();
        const { username, password } = user;
        if (username && password) {
            const res = await axios.post(`/signup`, user);
            alert(res.data);
            return;
        }
        alert(`Invalid input`);
    }

    return (
        <form onSubmit={signUp}>
            <div className=" signUp displayPeeps container shadow-sm p-3 mb-5 bg-warning rounded">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <label className="signUpField"><b>Username:</b></label>
                <input type="text" placeholder="Enter Username" name="username" required value={user.username} onChange={handleChange} /><br></br>

                <label className="signUpField"><b>Password:</b></label>
                <input type="password" placeholder="Enter Password" name="password" required value={user.password} onChange={handleChange} />

                <div className="clearfix">
                    <Link to="/">
                        <button type="button" className="signupbtn">Cancel</button>
                    </Link>
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>
    )
}
