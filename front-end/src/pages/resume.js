import React, { useState } from 'react';   
import Modal from '../components/modal';
import SEO from "../components/seo"
import Layout from '../layouts/layout';

const Resume = () =>{
  const [ isCartModalOpen, setCartModalOpen ] = useState(false);
  return (
     <Layout>
          <div className="page">
          <SEO title="Resume"
                description="I have a bachelors Degree in Enviornmetal Science from Galen Univeristy. Worked for companies such as Belizing.com, Oblip.com..."
    
          />   
          <h1 className="title">Resume</h1> 
          <h4 className="sub-title">A timeline of where I have worked.</h4>
          <ul className="timeline"> 
          <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag">Oblip.com</span>
                  <span className="time-wrapper"><span className="time">2018 - present</span></span>
                </div>
                <div className="desc">Front-end Web developer & Mobile Developer!
                   <br/>
                   <span className="more" onClick={() => setCartModalOpen(true)}>learn more</span>
                   <Modal
                   isOpen={isCartModalOpen} 
                   modalHandler={setCartModalOpen}
                   >Hello WOrld</Modal>
                </div> 
              </div>
            </li>
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">EcoCrypt.org</span>
                  <span className="time-wrapper"><span className="time">2018 - present</span></span>
                </div>
                <div className="desc">My current employment. A full Stack Developer!
                  <br/>
                  <span className="more" onClick={() => setCartModalOpen(true)}>learn more</span></div>  
              </div>
            </li>
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag">Belizing.com</span>
                  <span className="time-wrapper"><span className="time">2018 - 2020</span></span>
                </div>
                <div className="desc">Content Creator & Android Developer!
                   <br/>
                   <span className="more" onClick={() => setCartModalOpen(true)}>learn more</span>
                </div> 
              </div>
            </li>
            <li>
              <div className="direction-r">
                <div className="flag-wrapper">
                  <span className="flag">Galen University</span>
                  <span className="time-wrapper"><span className="time">2016 - 2018</span></span>
                </div>
                <div className="desc">Web Developer and content creator!
                   <br/>
                   <span className="more">learn more</span>
                </div> 
              </div>
            </li>
            <li>
              <div className="direction-l">
                <div className="flag-wrapper">
                  <span className="flag">DegaSolutions Inc.</span>
                  <span className="time-wrapper"><span className="time">2015 - 2016</span></span>
                </div>
                <div className="desc">Front-end Web & Wordpress Developer!
                   <br/>
                   <span className="more">learn more</span>
                </div> 
              </div>
            </li>
          </ul> 
          <br/>
          {/* <Link to="/resume"><button>More</button></Link>  */}
            {/* <div className="work-section">
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
            </div> */}
        </div>
    </Layout>
  );
}

export default Resume;
