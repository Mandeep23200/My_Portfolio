
import './App.css'
import About from './componenets/About';
import Header from './componenets/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componenets/Home';
import Contact from './componenets/Contact';
import Projects from './componenets/Projects';


function App() {
  

  return (
    <>
    <Router>
    <Header />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
    <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />

      </Routes>
      </Router>

    </>
  )
}

export default App
