// src/components/About.js
import cyndaquil from '../images/8.jpg'
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={cyndaquil} className="image" alt="Cyndaquil" />
      <p>Hi! My name is Kent, please excuse my portfolio page as everything is work in progress
      </p>
      
    </section>
  );
}

export default About;