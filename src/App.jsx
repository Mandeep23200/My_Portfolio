import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Header from './componenets/Header';
import Home from './componenets/Home';
import About from './componenets/About';
import Projects from './componenets/Projects';
import Contact from './componenets/Contact';

function App() {
  

  return (
    <>
       <Router>
       <Header/>
       <Routes>
       <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={< Contact/>} />
       </Routes>

       </Router>
      
    </>
  )
}

export default App
