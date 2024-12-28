import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='min-h-screen min-w-screen bg-richblack-900 box-border flex flex-col'>
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} />}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}
// ishko protected route banana pdega agar login hai tab hi ham dashboard per jaa payege nhi to login per chle jayegge

export default App;
