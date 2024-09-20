import React from 'react';

const Projects = () => {
  // Array of project objects
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      link: 'https://link-to-project-1.com',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      link: 'https://link-to-project-2.com',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
      link: 'https://link-to-project-3.com',
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
