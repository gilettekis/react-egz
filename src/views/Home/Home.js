import logo from './logo.svg';
import {Link} from 'react-router-dom';
export const Home = ()=> {
    return (
        <header className="App-header">
        <div className="Nav">
      <Link to ='/'>Home</Link>
      <Link to ='/add'>Add</Link>
      </div>
      
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    )
}