import { Link } from "react-router-dom"
import { useAuth } from "../auth"
import './Navigation.css'
export const Navigation = () => {
    const navLinkStyles = ({isActive})=>{
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none': 'underline',
        }
    }
const auth = useAuth()

    return (
        <>  <nav className='Navi'>
            
                <Link to={'/home'}>Home</Link>  
                <Link to={'/add'}>Add</Link>
                <Link to={'/register'}>Register</Link>
                <Link to={'/login'}>Login</Link> 

       </nav>
       {/* !auth.user &&  */}
       
        </>
      
      
    )
}