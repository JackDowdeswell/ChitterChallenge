import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PeepForm() {
    const [user, setUser] = useState({
        name: ``,
        peep: ``,
        dateCreated: Date.now()
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const sendPeep = async (e) => {
        e.preventDefault();
        const { name, peep } = user;
        if (name && peep) {
            const res = await axios.post(`/peep`, user);
            alert(res.data);
            return;
        }
        alert(`Invalid input`);
    }

    return (
        <>
            <form onSubmit={sendPeep}>
                <div className='mb-3 container'>
                    <label className="form-label name-form">Enter your name:</label>
                    <input type="text" id="name" name="name" className='form-control' placeholder='Full Name' onChange={handleChange}></input>
                </div>
                <div className="mb-3 container">
                    <label className="form-label">Start typing your peep in the box below</label>
                    <textarea className="form-control" id="peepTextbox" name="peep" rows="3" placeholder='I had a great day today...' onChange={handleChange}></textarea>
                </div>
                <div className="mb-3 container">
                    <button type="submit" className="btn btn-warning">Post Peep</button>
                </div>
            </form>

            <Link to="/peeps">
                <button type="button" className="viewAll btn btn-warning">View all Peeps</button>
            </Link>
        </>
    )
}