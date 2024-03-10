import axios from 'axios';
import React, { useState } from 'react'

const Registration = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userHandler = (event) => {
        setUsername(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = async(event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:3001/register", {
            username: username,
            password: password
        })
        
        // console.log(response);
    }

  return (
    <div>
        <div>Registration</div>
        <form onSubmit={submitHandler}>
            <label>Username</label>
            <input type="text" value = {username} onChange={userHandler}></input><br></br>
            <label>Password</label>
            <input type="password" value = {password} onChange={passwordHandler}></input><br></br>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Registration