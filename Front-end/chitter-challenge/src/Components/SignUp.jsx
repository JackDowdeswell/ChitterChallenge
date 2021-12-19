import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {

    return (
        <>
            <form>
                <div className=" signUp displayPeeps container shadow-sm p-3 mb-5 bg-warning rounded">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <label className="signUpField"><b>Username:</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required /><br></br>

                    <label className="signUpField"><b>Password:</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required />

                    {/* <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> */}

                    <div className="clearfix">
                        <Link to="/">
                            <button type="button" className="signupbtn">Cancel</button>
                        </Link>
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        </>
    )
}
