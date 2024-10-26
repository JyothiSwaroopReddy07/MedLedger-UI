// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from "./pages/ForgotPassword";
import ErrorPage from './pages/ErrorPage';
import CaseForm from './pages/CaseForm';
import SupervisiorDashBoard from './pages/SupervisiorDashBoard';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/resetpassword" element={<ResetPassword/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            <Route path="/casereporting" element={<CaseForm/>}/>
            <Route path="/mycases" element={<SupervisiorDashBoard/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
