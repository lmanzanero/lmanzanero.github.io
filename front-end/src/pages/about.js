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
              <img src="https://scontent.ftpe8-2.fna.fbcdn.net/v/t31.0-8/23213118_1669846839752690_438460186848441502_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=V_JhWdaB2L4AX-jYgN4&_nc_ht=scontent.ftpe8-2.fna&oh=a258945c231848dcef28711abc518df1&oe=5F5B60E1"  alt="Luis Manzanero"/>
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
