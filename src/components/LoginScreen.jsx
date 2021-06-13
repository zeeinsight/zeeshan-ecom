import React, { useState } from 'react';
import "./loginScreen.css"
import mylogo2 from "../img/mylogo2.png"
import { Link, useHistory } from 'react-router-dom';


const LoginScreen = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e=>{
   
            history.push("/")
     
    }
    const register = e=>{
        e.preventDefault();
      
                history.push("/")
       
    }
    return (
        <div className="login">
            <Link to="/">
            <img src={mylogo2} alt="" className="login_logo"/>
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn} className="login_Singinbutton"> Sign In</button>
                </form>
                <p> By signing-in you agree to theZeeshan-Gazi Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button className="login_Registerbutton" onClick={register}> Sign Up</button>
            </div>
            
        </div>
    );
};

export default LoginScreen;