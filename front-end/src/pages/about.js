import React from 'react';  
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';

const AboutPage = () =>{
  return (
    <Layout>
      <div className="page">
        <Helmet>
          <title>About me | Luis Manzanero</title>
          <meta name="description" content="I believe I'm one of the most versatile individuals that exists, and it has been been a personal goal of mine to be so; ultimatley, use every skill possible to safe our planet" />
           <meta name="keywords" content="Envrionmental Scientist, Innovator, Software Developer" />
        </Helmet>
        <div className="flex-container mobile">
            <div className="hero-image">
              <img src="https://scontent.ftpe7-3.fna.fbcdn.net/v/t31.0-8/23213118_1669846839752690_438460186848441502_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=UT6Zwtco6B0AX9QsgGf&_nc_ht=scontent.ftpe7-3.fna&oh=388c69b2ddbe19eab4b2ce7c7de11bf1&oe=5F0C46E1"  alt="Luis Manzanero"/>
            </div>
            <div className="main-text">
              <h1 className="about-header">Who am I?</h1>
              <p><b>"</b>I believe I'm one of the most versatile individuals that exists, and it has been been a personal goal of mine to be so; ultimatley, use every skill possible to save our planet.<b>"</b></p> 
            </div>
        </div>
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
            <p>I am happy to know you that 300+ projects done sucessfully!</p>
            <button>Hire me</button>
        </div>
    </div>
    </Layout>
  );
}

export default AboutPage;
