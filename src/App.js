import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from 'react';
import Aalert from "./Components/Aalert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
 const showAlert= (message, type)=>{
 setAlert({
  msg: message,   //making setalert as object and passing in aalert component
  type: type
 })
 setTimeout(() => {
  setAlert(null);
 }, 1500);
 }
 const togglemode= ()=>{
  if(mode==='dark'){
    setmode('light');
    document.body.style.backgroundColor ='white'
    showAlert('light mode enabled', 'success'); 
  }
  else {
    setmode('dark');
    document.body.style.backgroundColor ='rgb(86, 81, 81)'
   showAlert('dark mode enabled', 'success')
  }
 }

  return (
    <>
    <Router basename="/">
    <Navbar title='TextAnalyser' about='About' mode={mode} togglingmode={togglemode} />
    <div className="container my-3">
      <Aalert aalert={alert}/>
    
       </div>
      <Routes>
        <Route exact path="/" element={<Textform heading='Enter your text to analyze' showAlert={showAlert} mode={mode}/>}>
        </Route>
          <Route exact path="/about" element={<About mode={mode}/>} > 
        </Route>
      </Routes>
    </Router>
  
   
    
    
    </>
  );
}

export default App;
