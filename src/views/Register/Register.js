
import{Link} from 'react-router-dom';
import { Greeting } from "../../components/Greeting/Greeting";
export const Register = (props) => {
    const handleRegister = ()=> {
        prompt('Confirm your password')
    }
    return(
       
       <>
       <Link to ='/login'>Login</Link>
      <Link to ='/register'>Register</Link>
       {/* <h1>{props.title}</h1>
       {props.children} */}
        <form >
        <input type={'email'} className="email" placeholder="email"></input>
        <input type={'password'} className="password" placeholder="password"></input>
        <button onClick={handleRegister}>Registruotis</button>
        </form>
         <div>
         {/* <Greeting isLoggedIn={false}/>; */}
     </div>
     </>
       
    )

}
export default Register;