import React from 'react';  
import { Helmet } from 'react-helmet';

const About = () =>{
  return (
    <div className="about page">
        <Helmet>
          <title>About me | Luis Manzanero</title>
          <meta name="description" content="I believe I'm one of the most versatile individuals that exists, and it has been been a personal goal of mine to be so; ultimatley, use every skill possible to safe our planet" />
           <meta name="keywords" content="Envrionmental Scientist, Innovator, Software Developer" />
        </Helmet>
        <h1>Who am I?</h1>
        <p>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

        <div className="flex-container">
          <div className="services">
            <i>Icon</i>
            <h3>Software Development</h3>
          </div>
          <div className="services">
            <i>Icon</i>
            <h3>Web Design</h3>
          </div>
          <div className="services">
            <i>Icon</i>
            <h3>Web Design</h3>
          </div>
          <div className="services">
            <i>Icon</i>
            <h3>Mobile Development</h3>
          </div>
        </div>

        <div className="flex-container about-projects">
            <p>I am happy to know you 
                that 300+ projects done sucessfully!</p>
            <button>Hire me</button>
        </div>
    </div>
  );
}

export default About;
