import React from 'react';

// Importing your styling here if needed (like TailwindCSS or your own CSS file)
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">SilentVitas</h1>
        <p className="hero-subtitle">Silent in the noise, powerful in the code.</p>
        <a href="#projects" className="cta-button">Explore My Work</a>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I am a third-year Computer Science student specializing in Data Science, aspiring to become a bioinformatician focused on genomics, eager to tackle challenges in forensics and drug discovery using computational tools.
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-coontainer">
            <ProjectCard
                title="Bias Detection in Sports Media"
                description="A machine learning project analyzing bias in sports journalism."
                link="https://github.com/mjosewings/bias-detection-in-sports-media"
            />
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section" id="resources">
        <h2 className="section-title">Resources</h2>
        {/* Add scholarship links or other resources here */}
      </section>
    </div>
  );
};

export default Home;