import React from 'react';

function About() {
    return (
        <section id="about" className="py-12 bg-gray-50">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-lg mb-6">
                    Hi! I'm Mandeep Kaur, a passionate web developer with a love for creating engaging user experiences.
                </p>
                <p className="text-lg mb-6">
                    I have a background in computer science and a strong interest in front-end development, particularly with React. 
                    In my spare time, I enjoy working on personal projects and exploring new technologies.
                </p>
                <p className="text-lg mb-6">
                    I believe in the power of clean and efficient code, and I'm always eager to learn more about best practices 
                    and industry trends.
                </p>
               
                
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <ul className="list-disc list-inside text-left mx-auto max-w-lg">
                    <li className="mb-2">JavaScript (ES6+)</li>
                    <li className="mb-2">React.js</li>
                    <li className="mb-2">HTML & CSS</li>
                    <li className="mb-2">Tailwind CSS</li>
                    <li className="mb-2">Git & GitHub</li>
                    <li className="mb-2">Node.js (basic)</li>
                </ul>
            </div>
        </section>
    );
};

export default About;
