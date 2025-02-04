//import Single from "./single.js";
//import Multi from "./multi.js";
import { Login, Register, setData } from "../App.js";

import React, { useState } from 'react';

//import ReactDOM from "react-dom/client";
import {
    Outlet,
    Link
  } from "react-router-dom";

function Home(){
// Declare state variables for the form values and form submission status
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [formSubmitted, setFormSubmitted] = useState(false);
const [registered, setRegistered] = useState(false);
const [errorMsg, setErrorMsg] = useState('');
// Declare a function to handle form submission
const handleSubmit = async (event) => {
    event.preventDefault();

    const result = registered ? await Login(username, password) : await Register(username, password);

    // Set formSubmitted to true
    
    if(result.status === 200){
        setFormSubmitted(true);
        setData(result.data);
    }else if(result.status === 401){
        setErrorMsg("Password or Username is invalid, Please try again.");
    }else if(result.status === 409){
        setErrorMsg("This user already exists, Try Logging in or make a new account.");
    }else{
        console.log("Error: " + result);
    }
};
const handleRegister = (event) => {
    setRegistered(event.target.checked);
    setErrorMsg("");
  };
//To explain the code below.
//We check weather or not the form has been submited before we give users access to the main website
//This is handled using a terniary dependant on the state of formSubmitted
//Next the label is used to togle between register and login
//once the form is submitted the user gets access to the homepage where if we had more time we would probabbly put some nice stats about the user...
return(
    <>
    {formSubmitted ? (
        <nav>
            <div className="App">
                <div className="buttons">
                    <Link to="/single"><button className="rounded-button">Single-Player</button></Link>
                    <Link to="/" exact><button className="rounded-button">Home</button></Link>
                    <Link to="/multi"><button className="rounded-button">Multiplayer</button></Link>
                </div>
            </div>
        </nav>
        /* Any cool player stats should go here */
    ) :
    <div className="arcade-form">
            <p  style={{ color: 'red', fontSize: '16px' }}>{errorMsg}</p>
    <form onSubmit={handleSubmit}>
    <label className="arcade-label">
    Username:
        <input className="arcade-input" type="text" value={username} onChange={(event) => setUsername(event.target.value)} required />
    </label>
    <br />
    <label className="arcade-label">
    Password:
        <input className="arcade-input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
    </label>
    <br />
        <button className="arcade-button" type="submit">Submit</button>
    </form>

    {registered ? (
        <div className="row"><h1>←</h1><h2>Register</h2></div>
    ) :
        <div className="row"><h2>Login</h2><h1>→</h1></div>}
    <label class="switch">
        <input type="checkbox" onChange={handleRegister}/>
        <span class="slider round"></span>
    </label>
    </div>

    }
    <Outlet />
    </>
);
}



export default Home;