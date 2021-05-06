import React from 'react'

export default function Project({project}) {
  return (
    <div key={project.id} className="project-item">
        <img alt="" src={project.img_url.formats.medium.url}/>
        <div className="project-inner">
          <div className="project-title">{project.project_name}</div>
          <div className="category">#Web Design</div>
          <div className="links">
            <a href={project.link} target="_blank" rel="noreferrer">Live Link</a>
          </div>
        </div>
    </div>
  )
}
