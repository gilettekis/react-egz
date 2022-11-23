import logo from './logo.svg';
import { Routes, Route} from 'react-router-dom'
import{Link} from 'react-router-dom';
import './App.css';
import { Register } from './views/Register/Register';
import { Login } from './views/Login/Login';
import { Greeting } from './components/Greeting/Greeting';

function App() {
  return (
    <div className="App">
      <Register/>
      <Login/>
      <Greeting/>
      <header className="App-header">
        <div className="Nav">
          <Link to={'/'}>Home</Link> <br></br>
          <Link to={'/register'}>Register</Link> <br></br>
          <Link to={'/login'}>Login</Link> <br></br>
          <Link to={'/add'}>Add</Link>

      </div>
    
     
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      
      
      <Routes>
        <Route path='/'></Route>
        <Route  exact path='/register' >

        </Route>
        <Route path='/login'></Route>
        <Route path='/add' element = {''}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
