import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <>
        
        <header className="bg-gray-800 text-white p-4 shadow-md flex items-center justify-between">
            <h1  className="text-2xl font-bold">Mandeep Kaur</h1>
            <nav>
                <ul className="flex space-x-20 mt-2  ml-auto">
                <li><Link to="/"className="hover:text-gray-300 transition" >Home</Link></li>

                
                <li><Link to="/projects"className="hover:text-gray-300 transition" >Projects</Link></li>
                <li><Link to="/about" className="hover:text-gray-300 transition">About</Link></li>
                <li><Link to="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
                </ul>
            </nav>
        </header>
        
        
        </>
    )

}
export default Header;