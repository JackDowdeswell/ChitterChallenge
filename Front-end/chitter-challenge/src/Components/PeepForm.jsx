import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PeepForm({ setLoginUser, user }) {
    const { username } = user;
    const [peep, setPeep] = useState({
        username: username,
        message: ``,
        dateCreated: Date.now()
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setPeep({
            ...peep,
            [name]: value
        });
    }

    const sendPeep = async (e) => {
        e.preventDefault();
        const { message } = peep;
        console.log(peep);
        if (username && message) {
            const res = await axios.post(`/peep`, peep);
            alert(res.data);
            return;
        }
        alert(`You are either not logged in or have not typed a peep!`);
    }

    return (
        <>
            <form onSubmit={sendPeep}>

                <div className="form-label">Hello {username}!</div>
                <div className="mb-3 container">
                    <label className="form-label">Start typing your peep in the box below</label>
                    <textarea className="form-control" id="peepTextbox" name="message" rows="3" placeholder='I had a great day today...' onChange={handleChange}></textarea>
                </div>
                <div className="mb-3 container">
                    <button type="submit" className="btn btn-warning">Post Peep</button>
                </div>
            </form>

            <Link to="/peeps">
                <button type="button" className="viewAll btn btn-warning">View all Peeps</button>
            </Link>

            <Link to="/">
                <button onClick={() => setLoginUser({})} type="button" className="viewAll btn btn-warning">Log out</button>
            </Link>
        </>
    )
}