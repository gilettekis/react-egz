import { Link } from "react-router-dom"

import './Navigation.css'
export const NavigationUnpublic = () => {
    const navLinkStyles = ({isActive})=>{
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none': 'underline',
        }
    }

    return (
        <>  <nav className='Navi'>
            
               
            <h2 className="home"><Link to={'/home'}>Home</Link> </h2>  
            <h2 className="add"><Link to={'/add'}>Add</Link></h2>

       </nav>
       
       
        </>
      
      
    )
}



 