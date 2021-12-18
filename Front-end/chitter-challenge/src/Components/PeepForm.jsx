import React from 'react'
// import { useState, useEffect } from 'react';

export default function PeepForm() {
    return (
        <>
            <form action="/peep" method="post">
                <div class="mb-3 container">
                    <label for="peepTextbox" class="form-label">Start typing your peep in the box below</label>
                    <textarea class="form-control" id="peepTextbox" rows="3"></textarea>
                </div>
                <div class="mb-3 container">
                    <button type="submit" class="btn btn-warning">Post Peep</button>
                </div>
            </form>
        </>
    )
}
