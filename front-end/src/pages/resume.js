import React from 'react';  
import { Helmet } from 'react-helmet';
import SEO from "../components/seo"
import Layout from '../layouts/layout';

const Resume = () =>{
  return (
     <Layout>
          <div className="page">
          <SEO title="Resume"
                description="I have a bachelors Degree in Enviornmetal Science from Galen Univeristy. Worked for companies such as Belizing.com, Oblip.com..."
    
          /> 
            {/* <Helmet>
              <title>Resume | Luis Manzanero</title>
              <meta name="description" content="I have a bachelors Degree in Enviornmetal Science and 5+ years as a software developer" />
              <meta name="keywords" content="Bachelors Degree, GIS Specialist, Data Scientist, Web Developer, Guitarist, Adenturist, Innovator, Software Developer" />
            </Helmet> */}
            <div className="resume-header">
              <h1><i> Icon </i>Work Experience</h1>
            </div>
            <div className="work-section">
              <article className="work-item">
                <div className="work-item-inner">
                    <div className="work-logo">
                      <img alt="Belizing.com" src="https://di7b4gw2u10mc.cloudfront.net/295000/294288.906.486da78a22.jpg"/>
                    </div>
                    <div className="work-heading">
                      <h2>Full Stack Web Developer at Belizing.com</h2>
                      <span>2018-present</span>
                    </div>
                    <div className="work-content">
                        <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                        <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                        <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                    </div>
                </div>
              </article>
            </div>
            <div className="work-section">
              <article className="work-item">
                <div className="work-item-inner">
                    <div className="work-logo">
                      <img alt="Belizing.com" src="https://di7b4gw2u10mc.cloudfront.net/295000/294288.906.486da78a22.jpg"/>
                    </div>
                    <div className="work-heading">
                      <h2>Full Stack Web Developer at Belizing.com</h2>
                      <span>2018-present</span>
                    </div>
                    <div className="work-content">
                        <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                        <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                        <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                    </div>
                </div>
              </article>
            </div>
            <div className="resume-header">
              <h1><i>Icon </i>Volunteer Work Experience</h1>
            </div>
            <div className="work-section">
              <article className="work-item">
                <div className="work-item-inner">
                    <div className="work-logo">
                      <img alt="Belizing.com" src="https://di7b4gw2u10mc.cloudfront.net/295000/294288.906.486da78a22.jpg"/>
                    </div>
                    <div className="work-heading">
                      <h2>Full Stack Web Developer at Belizing.com</h2> 
                      <span>2018-present</span>
                    </div>
                  <div className="work-content">
                      <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                      <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                      <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                  </div>
                </div>
              </article>
            </div>
            <div className="resume-header">
              <h1><i>Icon </i>Education</h1>
            </div>
            <div className="work-section">
              <article className="work-item">
                <div className="work-item-inner">
                    <div className="work-logo">
                      <img alt="Belizing.com" src="https://di7b4gw2u10mc.cloudfront.net/295000/294288.906.486da78a22.jpg"/>
                    </div>
                    <div className="work-heading">
                      <h2>Full Stack Web Developer at Belizing.com</h2>
                      <span>2018-present</span>
                    </div>
                    <div className="work-content">
                      <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                      <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                      <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                    </div>
                </div>
              </article>
            </div>
        </div>
    </Layout>
  );
}

export default Resume;
