import logo from '../logo.svg';
import { Link } from "react-router-dom"
import { NavigationPublic } from '../components/Navigation/NavigationPublic/NavigationPublic';
import { NavigationUnpublic } from '../components/Navigation/NavigationUnpublic/NavigationUnpublic';

const Page = ({title= ('PIRMAS BLYNAS'), children})=> {
    return (

           <>
      <header className="App-header">
     

     
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