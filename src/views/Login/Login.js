import {Link} from 'react-router-dom';
import { Greeting } from "../../components/Greeting/Greeting"
export const Login = (props) => {
    const handleLogin =()=> {
        prompt('Confirm your password');
    }
    return(
        <>
        <Link to ='/login'>Login</Link>
        <Link to ='/register'>Register</Link>
         
    <form className='registerForm'>
        <input type={'email'} className="email"  placeholder="email"></input>
        <input type={'password'} className="password" placeholder="password"></input>
        <button onClick={handleLogin}>Prisijungti</button>
    </form>
       <Greeting isLoggedIn={true}/>;
        </>
        )

}