import React, { useState }from 'react';  
import Layout from '../layouts/layout';

const Projects = () =>{
  const [isActive, setIsActive] = useState(0);
  // fetch('http://localhost:3000/api/projects/', {
  //   method: 'GET',
  //   mode:'no-cors'
  // })
  // .then(res => {
  //   console.log(res.text)
  // }) 

  const onClick = (e) => { 
    const options = document.querySelectorAll('.option'); 
    options.forEach(option => { 
      option.classList.remove('active');
    });
    e.target.classList.add('active');
  }

  return (
    <Layout>
        <div className="page">
          <h1>My Recent Work</h1>
          <div className="projects-options">
                <ul>
                  <li onClick={onClick}><a className="option active" href="#">All</a></li>
                  <li onClick={onClick}><a className="option" href="#">Web Design</a></li>
                  <li onClick={onClick}><a className="option" href="#">Mobile Development</a></li>
                  <li onClick={onClick}><a className="option" href="#">Videos</a></li>
                  <li onClick={onClick}><a className="option" href="#">Music</a></li>   
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
