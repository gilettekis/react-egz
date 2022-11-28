import styled from "styled-components"
import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "../../components/auth";
import {Link} from 'react-router-dom';
import { Greeting } from "../../components/Greeting/Greeting"
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import { NavigationPublic } from "../../components/Navigation/NavigationPublic/NavigationPublic";
// import { Page } from '../../Page/Page';
<NavigationPublic/>

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
    const [ userData, setData] =  useState([]);
    useEffect(() => {
        fetch (`${BASE_URL}/auth/login`, {
            method: 'GET',
            
            body:JSON.stringify({
                email:'',
                password: ''    
            })  
        })
        .then (res => res.json())
        .then(data => {
            setData (userData)
        })
      })
     
    console.log (userData);
    return(
        <>
         <header className="App-header">
         <NavigationPublic/>
 </header>
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
       
       
        <div>
            {userData.map((post)=>(
                <div >
                  
                <h2 >  {post.userData}</h2>
                <Link to={!auth.user && '/home' }>Home</Link> 
                </div>
                
            ))}

        </div>
        </>
        )
    }

export default Login;