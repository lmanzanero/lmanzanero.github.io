import React from 'react';  
import Layout from '../layouts/layout';

const Projects = () =>{
  return (
    <Layout>
        <div className="page">
          <h1>My Recent Work</h1>
          <div className="projects-options">
                <ul>
                  <li><a className="option" href="#">All</a></li>
                  <li><a className="option active" href="#">Web Design</a></li>
                  <li><a className="option" href="#">Mobile Development</a></li>
                  <li><a className="option" href="#">Videos</a></li>
                  <li><a className="option" href="#">Music</a></li>   
                </ul>
          </div>
          <div className="project-items">
            <div className="project-item">
              <img alt="" src="https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg"/>
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
            <div className="project-item">
             <img alt="" src="https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg"/>
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
            <div className="project-item">
              <img alt="" src="https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg"/>
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-inner">
                <div className="title">Project 1</div>
                <div className="category">Web Design</div>
                <div className="links">
                  <button>Live Link</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  );
}

export default Projects;
