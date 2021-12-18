import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AllPeeps() {
    const [allPeeps, setAllPeeps] = useState([])

    // const getPeeps = async () => {
    //     const res = await axios.get(`/peep`);
    //     const peeps = res.data;
    //     console.log(peeps)
    //     setAllPeeps(peeps);
    // }

    // getPeeps();

    useEffect(() => {
        async function getPeeps() {
            let res = await axios.get(`/peep`);
            // res = await res.jsons()
            // console.log(res.data.users[0])
            setAllPeeps(res.data.users)
        }

        getPeeps()
    }, [])

    return (
        <>
            <div>
                <p className="allPeepsTitle">All Peeps:</p>
                {allPeeps.map(peep => <div className="displayPeeps container shadow-sm p-3 mb-5 bg-warning rounded">User: {peep.name}<br></br>"{peep.peep}"<br></br>Date posted: {peep.dateCreated}</div>)}
            </div>
            <Link to="/">
                <button type="button" className="viewAll btn btn-warning">Create a new Peep!</button>
            </Link>
        </>
    )
}
