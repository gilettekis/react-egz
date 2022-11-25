import logo from '../logo.svg';
import { Link } from "react-router-dom"
import { Navigation } from '../components/Navigation/Navigation';
const Page = ({title= ('PIRMAS BLYNAS'), children})=> {
    return (

           <>
      
      <header className="App-header">
      <Navigation/>
          <>
          <Link to={'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
          <h1 style={{color:'purple'}}>{title ? title: 'REGISTER' ? title: 'LOGIN'}</h1>
            {children}
          </>
          
      </header>
      
      </>
      
    
     
    )
}

export default Page;