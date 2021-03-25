import React from "react" 
import Layout from "../layouts/layout" 
import SEO from "../components/seo" 

const About = () => (
  <Layout> 
      <SEO title="About"
          description="I believe I'm one of the most versatile individuals that exists, and it has been been a personal goal of mine to be so; ultimatley, use every skill possible to safe our planet"
      /> 
      {/* <meta name="description" content="I believe I'm one of the most versatile individuals that exists, and it has been been a personal goal of mine to be so; ultimatley, use every skill possible to safe our planet" />
           <meta name="keywords" content="Envrionmental Scientist, Innovator, Software Developer" /> */}
        <div className="page"> 
          <h1 className="title">About</h1>
          <h4 className="sub-title">A little about me! </h4>
          <div className="about-section-inner">
            <div className="about-content">
              <p>Hello, I'm Luis Manzanero orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              </p>
            </div>
            <div className="about-image">
              <img src="https://lh3.google.com/pw/ACtC-3d706a-8r7R9SsZsEc0lwcS1a8bHMapsg9DMkm697fEw4Jzf_1Eg0-lF29sLQev58fjuqlQthe9rYk1wMKDfGpDG0QBa0U=w1232-h1642-no?authuser=0" />
            </div>
          </div> 
         {/* <Link to="/about"><button>Read More</button></Link> */}
         </div>
  </Layout>
)

export default About
