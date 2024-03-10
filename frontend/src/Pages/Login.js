import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginErr, setloginErr] = useState("");

    const userHandler = (event) => {
        setUsername(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }
    
    const submitHandler = async(event) => {
        try{
            event.preventDefault();
            const response = await axios.post("http://localhost:3001/login", {
                username: username,
                password: password
            });
            if(response.status === 200){
                localStorage.setItem("jwtToken", response.data.token);
                navigate("/posts");
            }
            // console.log(response);
            // setUsername("");
            // setPassword("");
        }
        catch(e){
            setloginErr(e);
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <label>Username</label>
            <input type="text" value = {username} onChange={userHandler}></input><br></br>
            <label>Password</label>
            <input type="password" value = {password} onChange={passwordHandler}></input><br></br>
            <button>Submit</button>
        </form>
        <h1>{loginErr}</h1>
    </div>
  )
}

export default Login