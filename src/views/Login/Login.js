import styled from "styled-components"
// import {Link} from 'react-router-dom';
import { Greeting } from "../../components/Greeting/Greeting"
// import { Page } from '../../Page/Page';
const Login = ({title= (''), children}) => {
    const Title = styled.h1`
    color:green;
    background:#eee;
    padding:25 
    `;
    const handleLogin =(e)=> {
        e.preventDefoult();
        alert('Your have logged in successfully');
        
    }
    return(
        <>
        <Greeting isLoggedIn={true}/>;
       <Title><h1>{title }</h1>
            {children}
        <h3 >LOGIN FORM</h3>
        </Title>
       
    <form className='registerForm'>
        <input type={'email'} className="email"  placeholder="email"></input>
        <input type={'password'} className="password" placeholder="password"></input>
       <button onClick={handleLogin}>Prisijungti</button> 
    </form>
       
        </>
        )

}
export default Login;