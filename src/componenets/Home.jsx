import React from 'react';
import myPhoto from '../assets/myPhoto.jpeg'; 


function Home  () {
    return (
   
        <section id="home" className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
            <p className="text-lg mb-4">
                Hello! I'm Mandeep kaur, a passionate developer with experience in creating web applications.
                This portfolio showcases my projects and skills.
            </p>
            <div className="flex flex-col items-center  mb-4 transition-transform transform hover:scale-105">
                    <img 
                       src={myPhoto} 
                        alt="Mandeep Kaur" 
                        className="w-32 h-40 rounded-full shadow-lg mb-2" 
                    />
                    </div>
            <p className="text-lg text-center mb-4">
                Feel free to explore my work, learn more about me, and get in touch!
            </p>
        </section>
    );
    
};

export default Home;
