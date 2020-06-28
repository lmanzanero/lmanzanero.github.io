import React, { useState, useEffect }from 'react';  
import Layout from '../layouts/layout';
import { Link } from 'gatsby';


const Projects = () =>{
  const [projectsData, setProjectData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/?albumId=1')
      .then(response => response.json())
      .then(json => setProjectData(json));
      }, []);

  const onClickItem = (e) => { 
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
                  <li onClick={onClickItem}><a className="option active" href="#all">All</a></li>
                  <li onClick={onClickItem}><a className="option" href="#web-design">Web Design</a></li>
                  <li onClick={onClickItem}><a className="option" href="#mobile-development">Mobile Development</a></li>
                  <li onClick={onClickItem}><a className="option" href="#videos">Videos</a></li>
                  <li onClick={onClickItem}><a className="option" href="#music">Music</a></li>   
                </ul>
          </div>
          <div className="project-items">
            {
              projectsData.map(project => (
                <div key={project.id} className="project-item">
                    <img alt="" src={project.thumbnailUrl}/>
                    <div className="project-inner">
                     <div className="title">{project.title}</div>
                      <div className="category">Web Design</div>
                      <div className="links">
                        <a href={project.url} target="_blank"><button>Live Link</button></a>
                      </div>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
    </Layout>
  );
}

export default Projects;
