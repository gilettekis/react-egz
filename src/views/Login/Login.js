import styled from "styled-components"
import { useState } from "react";
import { AuthProvider, useAuth } from "../../components/auth";
// import {Link} from 'react-router-dom';
import { Greeting } from "../../components/Greeting/Greeting"
import { useNavigate } from "react-router-dom";
// import { Page } from '../../Page/Page';


const Login = ({title= (''), children}) => {
    const [user, setUser]= useState('')
const auth = useAuth()
const navigate = useNavigate()

    const Title = styled.h3`
    color:green;
    background:#eee;
    padding:25 
    `;
    const handleLogin =(e)=> {
        e.preventDefoult();
        alert('Your have logged in successfully');
        auth.login(user)
        navigate('/home')
    }
    return(
        <>
        <AuthProvider/>

        <Greeting isLoggedIn={true}/>;
       <Title><h3>{title }</h3>
            {children}
        <h3 >LOGIN FORM</h3>
        </Title>
        
    <form className='registerForm'>
        <label>
        <input type={'email'} className="email"  placeholder="email"></input>
        <input type={'password'} className="password" placeholder="password" onChange={(e) => setUser(e.target.value)}></input>
        </label>
       
       <button onClick={handleLogin}>Prisijungti</button> 
    </form>
       
        </>
        )
    }

export default Login;