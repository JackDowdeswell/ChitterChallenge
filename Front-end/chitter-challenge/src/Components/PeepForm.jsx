import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function PeepForm() {
    const [user, setUser] = useState({
        name: ``,
        peep: ``
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
                    <label for="peepTextbox" class="form-label name-form">Enter your name:</label>
                    <input type="text" id="name" name="name" className='form-control' placeholder='Full Name' onChange={handleChange}></input>
                </div>
                <div class="mb-3 container">
                    <label for="peepTextbox" class="form-label">Start typing your peep in the box below</label>
                    <textarea class="form-control" id="peepTextbox" name="peep" rows="3" placeholder='I had a great day today...' onChange={handleChange}></textarea>
                </div>
                <div class="mb-3 container">
                    <button type="submit" class="btn btn-warning">Post Peep</button>
                </div>
            </form>
        </>
    )
}