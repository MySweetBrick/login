import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Features from './components/Features';
import Teachers from './components/Teachers';
import './App.css';


import Modal from './components/login/loginModal';
import Login from './components/login/Login';
import StudentPage from './components/StudentPage';





function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home /> }/>
       <Route path='/features' element={<Features />} />
       <Route path='/teachers' element={<Teachers />} />
       <Route path='/login' element={<Login />} >
         {/* <Route path='login/students' element={<StudentPage />} /> */}
       </Route>

     </Routes>
     <Footer />
    </Router>
  );
}

export default App;

