import React from "react" 
import Layout from "../layouts/layout" 
import SEO from "../components/seo"
import '../layouts/layout' 

const IndexPage = () => (
  <Layout> 
      <SEO title="Web Developer | Environmental Scientist | Innovator"/> 
      {/* <meta name="description" content="I believe I'm one of the most versatile individuals that exists, and it has been been a personal goal of mine to be so; ultimatley, use every skill possible to safe our planet" />
           <meta name="keywords" content="Envrionmental Scientist, Innovator, Software Developer" /> */}
      <div className="page">
        <div className="flex-container mobile">
            <div className="hero-image">
              <img src="https://avatars2.githubusercontent.com/u/20497361?s=400&u=fcce070b780d1229d7d97890113a85f00cf4a049&v=4"  alt="Luis Manzanero"/>
            </div>
            <div className="main-text">
              <h1 className="about-header">Envrionmental Scientist, Innovator, Software Developer</h1>
               <p><b>"</b>I believe I'm one of the most versatile individuals that exists, and it has been been a personal goal of mine to be so; ultimatley, use every skill possible to save our planet.<b>"</b></p> 
            </div>
        </div>
        <div className="flex-container">
            <div className="services">
              <i>Icon</i>
              <h3>Web Design</h3>
            </div>
            <div className="services">
              <i>Icon</i>
              <h3>Mobile Development</h3>
            </div>
            <div className="services">
              <i>Icon</i>
              <h3>Videos</h3>
            </div>
            <div className="services">
              <i>Icon</i>
              <h3>Music</h3>
            </div>
        </div>
        <div className="flex-container about-projects">
            <p>I'd love to explore opportunities that can change the world!</p>
            <button>Contact me</button>
        </div>
    </div>
  </Layout>
)

export default IndexPage
