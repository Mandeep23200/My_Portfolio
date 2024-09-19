import React from 'react';

function Projects () {
    const projects = [
        { title :"Todo-App" , description: 'A simple Todo application to manage tasks.', code :"https://github.com/Mandeep23200/Todo_App/tree/master", link: ' https://mandeep23200.github.io/Todo_App/' },
        { title :"Hangman-game" ,  description: 'A classic Hangman game where you guess letters.', code:"https://github.com/Mandeep23200/hangman-game",link: ' https://mandeep23200.github.io/hangman-game/' },
    ];

    return (
        <section id="projects" className="py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
            <ul className="max-w-3xl mx-auto space-y-6">
                {projects.map((project, index) => (
                    <li key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <a href={project.code}className="text-blue-500 hover:text-blue-700 transition p-5" target='blank'>View code</a>
                        <a href={project.link}className="text-blue-500 hover:text-blue-700 transition" target='blank'>View Project</a>

                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
