import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AllPeeps() {
    const [allPeeps, setAllPeeps] = useState([])

    useEffect(() => {
        async function getPeeps() {
            let res = await axios.get(`/peep`);
            // res = await res.jsons()
            // console.log(res.data.users[0])
            setAllPeeps(res.data.users)
        }

        getPeeps()
    }, [])

    console.log(allPeeps)
    return (
        <>
            <div>
                <p className="allPeepsTitle">All Peeps:</p>
                {allPeeps[0] ? allPeeps.slice(0).reverse().map(peep => <div className="displayPeeps container shadow-sm p-3 mb-5 bg-warning rounded">User: {peep.name}<br></br>"{peep.peep}"<br></br>Date posted: {peep.dateCreated}</div>) : <div className="allPeepsTitle">No peeps found!</div>}
            </div>
            <Link to="/">
                <button type="button" className="viewAll btn btn-warning">Create a new Peep!</button>
            </Link>
        </>
    )
}
