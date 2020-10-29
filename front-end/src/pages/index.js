import React from "react" 
import Layout from "../layouts/layout" 
import SEO from "../components/seo"
import '../layouts/layout' 
import Slider from "../components/slider"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout> 
      <SEO 
          title="Scientist, Software Developer, Innovator" 
          description="I believe I'm one of the most versatile individuals that exists, and it has been been a personal goal of mine to be so; ultimatley, use every skill possible to safe our planet"
          isHomePage="true"
      /> 
      <div className="page">
         <Slider/>
        {/* About Section */}
         <section> 
          <h2>About</h2>
          <div className="about-section-inner">
            <div className="about-content">
              <p>Hello, I'm Luis Manzanero orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
              </p>
            </div>
            <div className="about-image">
              <img src="https://avatars2.githubusercontent.com/u/20497361?s=400&u=fcce070b780d1229d7d97890113a85f00cf4a049&v=4" />
            </div>
          </div> 
         </section>
         <section>
          <h2>Resume</h2> 
          <ul class="timeline"> 
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="flag">Freelancer</span>
                  <span class="time-wrapper"><span class="time">2013 - present</span></span>
                </div>
                <div class="desc">My current employment. Way better than the position before!</div>
              </div>
            </li>
            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="flag">Apple Inc.</span>
                  <span class="time-wrapper"><span class="time">2011 - 2013</span></span>
                </div>
                <div class="desc">My first employer. All the stuff I've learned and projects I've been working on.</div>
              </div>
            </li>
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="flag">Harvard University</span>
                  <span class="time-wrapper"><span class="time">2008 - 2011</span></span>
                </div>
                <div class="desc">A description of all the lectures and courses I have taken and my final degree?</div>
              </div>
            </li>
          </ul> 
         </section>
         <section>
           <h2>Projects</h2>
           <h4 className="sub-title">Things that I'm good at</h4>
           <div className="project-items"> 
                <div className="project-item">
                    <img alt="test" src="https://www.reggieescobar.com/assets/images/public_projects/oblip_website.jpg"/>
                    <div className="project-inner">
                     <div className="title">Oblip.com</div>
                      <div className="category">Web Design</div>
                      <div className="links">
                        <a href="#" target="_blank" rel="noreferrer"><button>Live Link</button></a>
                      </div>
                    </div>
                </div>  
                <div className="project-item">
                    <img alt="test" src="http://www.ecocrypt.org/logo_transparent.png"/>
                    <div className="project-inner">
                     <div className="title">Ecorypt.org</div>
                      <div className="category">Web Design</div>
                      <div className="links">
                        <a href="#" target="_blank" rel="noreferrer"><button>Live Link</button></a>
                      </div>
                    </div>
                </div>  
                <div className="project-item">
                    <img alt="test" src="https://github.com/lmanzanero/belize-coronavirus-tracker/blob/master/Screenshot%202020-10-30%20at%2001.50.33.png?raw=true"/>
                    <div className="project-inner">
                     <div className="title">Belize Coronavirus Tracker</div>
                      <div className="category">Web Design</div>
                      <div className="links">
                        <a href="#" target="_blank" rel="noreferrer"><button>Live Link</button></a>
                      </div>
                    </div>
                </div>  
                <div className="project-item">
                    <img alt="test" src="https://www.reggieescobar.com/assets/images/public_projects/oblip_website.jpg"/>
                    <div className="project-inner">
                     <div className="title">Porject 1</div>
                      <div className="category">Web Design</div>
                      <div className="links">
                        <a href="#" target="_blank" rel="noreferrer"><button>Live Link</button></a>
                      </div>
                    </div>
                </div>  
                <div className="project-item">
                    <img alt="test" src="https://www.reggieescobar.com/assets/images/public_projects/oblip_website.jpg"/>
                    <div className="project-inner">
                     <div className="title">Porject 1</div>
                      <div className="category">Web Design</div>
                      <div className="links">
                        <a href="#" target="_blank" rel="noreferrer"><button>Live Link</button></a>
                      </div>
                    </div>
                </div>  
                <div className="project-item">
                    <img alt="test" src="https://www.reggieescobar.com/assets/images/public_projects/oblip_website.jpg"/>
                    <div className="project-inner">
                     <div className="title">Porject 1</div>
                      <div className="category">Web Design</div>
                      <div className="links">
                        <a href="#" target="_blank" rel="noreferrer"><button>Live Link</button></a>
                      </div>
                    </div>
                </div>  
          </div>
         </section>
         <section>
           <h2>Blog</h2>
           <div className="blog-posts">
              <div className="blog-post">
                <div className="image">
                  <img alt="Me" src="https://avatars2.githubusercontent.com/u/20497361?s=400&u=fcce070b780d1229d7d97890113a85f00cf4a049&v=4" />
                </div>
                <div className="blog-info">
                  <div className="category"><a href="#">#personal</a></div>
                  <div className="title"><h3>How I overcame Depression in this day and age of depravity</h3></div>
                  <div className="exerpt">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                  <div className="author">Luis Manzanero</div>
                  <div className="published-date">September, 23rd, 2019</div>
                </div>
              </div>
              <div className="blog-post">
                <div className="image">
                  <img alt="Me" src="https://avatars2.githubusercontent.com/u/20497361?s=400&u=fcce070b780d1229d7d97890113a85f00cf4a049&v=4" />
                </div>
                <div className="blog-info">
                  <div className="category"><a href="#">#personal</a></div>
                  <div className="title"><h3>How I overcame Depression in this day and age of depravity</h3></div>
                  <div className="exerpt">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                  <div className="author">Luis Manzanero</div>
                  <div className="published-date">September, 23rd, 2019</div>
                </div>
              </div>
              <div className="blog-post">
                <div className="image">
                  <img alt="Me" src="https://avatars2.githubusercontent.com/u/20497361?s=400&u=fcce070b780d1229d7d97890113a85f00cf4a049&v=4" />
                </div>
                <div className="blog-info">
                  <div className="category"><a href="#">#personal</a></div>
                  <div className="title"><h3>How I overcame Depression in this day and age of depravity</h3></div>
                  <div className="exerpt">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                  <div className="author">Luis Manzanero</div>
                  <div className="published-date">September, 23rd, 2019</div>
                </div>
              </div>
           </div>
           <button>More</button>
         </section>
         <section>
           <hh1>Contact</hh1>
         </section>
      </div> 
  </Layout>
)

export default IndexPage
