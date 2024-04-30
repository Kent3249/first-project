import React from 'react';
import cyndaquil1 from '../images/250px-0155Cyndaquil.png'
import quilava from '../images/250px-0156Quilava.png'
import typhlosion from '../images/250px-0157Typhlosion.png'

const Projects = () => {
  return (
    <section id="projects">
      <div className="project">
            <h3>Evolution 1</h3>
            <p>It's not a project but clicking the image will take you to a page about my favorite pokemon starter</p>
            {/* Clickable image that navigates to another website */}
            <a
              className="image-link"
              href="https://bulbapedia.bulbagarden.net/wiki/Cyndaquil_(Pok%C3%A9mon)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cyndaquil1} className="image-link" alt="Cyndaquil1" />
            </a>
          </div>
      {/* Add more projects as needed */}
      <div className="project">
            <h3>Evolution 2</h3>
            <p>The image below will take you to more information about Cyndaquil's second evolution: Quilava</p>
            {/* Clickable image that navigates to another website */}
            <a
              className="image-link"
              href="https://bulbapedia.bulbagarden.net/wiki/Quilava_(Pok%C3%A9mon)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={quilava} className="image-link" alt="quilava" />
            </a>
          </div>
      <div className="project">
            <h3>Evolution 3</h3>
            <p>Below will take you to information about its final evolution: Typhlosion</p>
            {/* Clickable image that navigates to another website */}
            <a
              className="image-link"
              href="https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pok%C3%A9mon)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={typhlosion} className="image-link" alt="typhlosion" />
            </a>
          </div>
      
    </section>
  );
}

export default Projects;