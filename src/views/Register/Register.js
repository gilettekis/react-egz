
import styled from "styled-components"
import { Greeting } from "../../components/Greeting/Greeting";
import { Navigation } from "../../components/Navigation/Navigation";
import { BASE_URL } from "../../utils/constants";
// import { Page } from '../../Page/Page';
<Navigation/>
 const Register = ({title= (''), children}) => {
    
    const Title = styled.h3`
    color:green;
    background:#eee;
    padding:25 
    `;
    const handleRegister = (e)=> {
        alert ('Your registration was successful')
        e.preventDefoult();

        fetch (`${BASE_URL}/auth/register`, {
            method: 'POST',
            
            body:JSON.stringify({
                email:'onute123@gmail.com',
                password: 'jonukas'    
            })  
        })
        .then (res => res.json())
        .then(data => {
            console.log(data);
        })
        
     
    }
    return(
       
       <>
     <Title><h3>REGISTRATION FORM</h3> </Title>
       
        <form>
        <input type={'email'} className="email" placeholder="email"></input>
        <input type={'password'} className="password" placeholder="password"></input>
        <button onClick={handleRegister}>Registruotis</button>
        </form>
         <div>
         <Greeting isLoggedIn={false}/>;
         <h3>{title }</h3>
            {children}
     </div>
     </>
     
    )
}
export default Register;