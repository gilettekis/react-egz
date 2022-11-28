import React from 'react';
import { Routes, Route} from 'react-router-dom'
// import{Link} from 'react-router-dom';
import './App.css';
import { AuthProvider } from './components/auth';
import Page from './Page/Page';
import { Add } from './views/Add/Add';
import { Home } from './views/Home/Home';

const Register = React.lazy (() => import('./views/Register/Register'));
const Login = React.lazy (() => import ('./views/Login/Login'));



function App() {
  
  return (
    
    <div className='App'> 
      <Page/>
    <Routes>
    
      <Route path='/login' element={
      <React.Suspense fallback={<div>Loading...</div>}>{<div><Login/></div>}</React.Suspense>}> </Route>
      <Route path='/register'element ={
      <React.Suspense fallback={<div>Loading...</div>}>{<div><Register/></div>}</React.Suspense>}> </Route>
      <Route path='/add' element = {<div><Add/></div>}></Route>
      <Route path='/home' element = {<div><Home/></div>}></Route>
      
    </Routes>
    <AuthProvider/>
      
    </div>
  );
}

export default App;
