
import {  useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthProvider } from "../../components/auth";
import { Greeting } from "../../components/Greeting/Greeting";
import { NavigationPublic } from "../../components/Navigation/NavigationPublic/NavigationPublic";
import { BASE_URL } from "../../utils/constants";
// import { Page } from '../../Page/Page';



  const Register = ({title= (''), children}) => {
    const Title = styled.h3`
    color:green;
    background:#eee;
    padding:25 
    `;
    
    const handleRegister = (e)=> {
   
        
        alert ('Your registration was successful')
        e.preventDefoult();
    }
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    let item = {email, password}
    
         fetch (`${BASE_URL}/auth/register`, {
            method: 'POST',
            body:JSON.stringify(item),
            headers:{ 
                'Content-Type': 'application/json'
            }  
        })
        .then (res => res.json())
        localStorage.setItem("user-info",JSON.stringify(item))
       
    return(
       
       <>
        <header className="App-header" >
   
    <NavigationPublic/>
 </header>
     <Title><h3>REGISTRATION FORM</h3> </Title>
     
       <AuthProvider/>
        <form>
        <input type={'email'}  value = {email} onChange={(e)=> setEmail (e.target.value)} className="email" placeholder="email"></input>
        <input type={'password'} value = {password} onChange={(e)=> setPassword (e.target.value)} className="password" placeholder="password"></input>
        <button onClick={handleRegister}>Registruotis</button>
        </form>
         <div>
       
         <Greeting isLoggedIn={false}/>;
         <h3>{title }</h3>
            {children}
            <Greeting isLoggedIn= {true}>  <Link to={'/login' }>Login</Link> </Greeting>;
     </div>
     
     </>
     
    )
}
export default Register;