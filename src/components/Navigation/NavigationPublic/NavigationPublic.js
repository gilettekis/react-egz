import { Link } from "react-router-dom"

import './Navigation.css'
export const NavigationPublic = () => {
    const navLinkStyles = ({isActive})=>{
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none': 'underline',
        }
    }


    return (
        <>  <nav className='Navi'>
            
               
                <h2 className="register" ><Link to={'/register'}>Register</Link></h2>
                <h2 className="login"><Link to={'/login' }>Login</Link> </h2>

       </nav>
       
       {/*  */}
       
        </>
      
      
    )
}