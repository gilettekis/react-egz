import { Link } from "react-router-dom"
import './Navigation.css'
export const Navigation = () => {
    return (
        <div className='Navi'>
        <h2><Link to={'/home'}>Home</Link> </h2>
          <h2><Link to={'/register'}>Register</Link></h2>
          <h2><Link to={'/login'}>Login</Link></h2>
          <h2><Link to={'/add'}>Add</Link></h2>
       </div>
      
    )
}