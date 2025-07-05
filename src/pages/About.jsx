import React from "react";

const About = () => {
  return (
    <div
      className="container py-5"
     
    >
      <h1 className="mb-4 border-bottom pb-2 brand-text">About FlickVerse</h1>

      <p className="lead text-muted">
        <strong className="text-dark">FlickVerse</strong> is a modern movie
        exploration platform built using React. It aims to provide movie lovers
        with a fast and interactive experience for browsing and discovering
        films. Whether you're a casual viewer or a film buff, FlickVerse offers
        detailed information about popular movies, including posters, cast,
        ratings, genres, and more.
      </p>

      <h4 className="mt-5 text-dark">Key Features</h4>
      <ul className="fs-6 text-muted mt-3">
        <li>Clean and responsive UI using Bootstrap and React Router</li>
        <li>Explore a wide variety of movies with full metadata</li>
        <li>Easy navigation with Home, Movies, About, and Contact pages</li>
        <li>Authentication support with Login and Signup options</li>
        <li>Fully responsive for mobile and desktop devices</li>
      </ul>

      <h4 className="mt-5 text-dark">Tech Stack Used</h4>
      <ul className="fs-6 text-muted mt-3">
        <li>
          <strong className="text-dark">React.js</strong> – Component-based
          frontend development
        </li>
        <li>
          <strong className="text-dark">React Router</strong> – Seamless
          navigation
        </li>
        <li>
          <strong className="text-dark">Bootstrap</strong> – Responsive and
          modern styling
        </li>
        <li>
          <strong className="text-dark">React Icons</strong> – Lightweight icon
          support
        </li>
        <li>
          <strong className="text-dark">Custom JSON</strong> – Static movie
          dataset
        </li>
      </ul>

      <h4 className="mt-5 text-dark">Project Purpose</h4>
      <p className="fs-6 text-muted">
        FlickVerse was built to showcase frontend development skills and provide
        an engaging user experience. It serves as a base for further
        enhancements like dynamic APIs, user reviews, and admin controls.
      </p>

      <h4 className="mt-5 text-dark">Future Enhancements</h4>
      <ul className="fs-6 text-muted mt-3">
        <li>Live integration with movie APIs (TMDb, OMDb, etc.)</li>
        <li>User reviews and rating features</li>
        <li>Admin panel for movie management</li>
        <li>Genre-based filtering and advanced search</li>
      </ul>

      <style>
        {`
          .brand-text {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
          }
          
          .border-bottom {
            border-bottom: 1px solid rgba(0,0,0,0.1) !important;
          }
        `}
      </style>
    </div>
  );
};

export default About;
