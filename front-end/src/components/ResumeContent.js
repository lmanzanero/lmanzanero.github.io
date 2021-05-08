import React from 'react'

export default function ResumeContent({ title, date, techs, desc}) {
  return (
    <div className="resume-content">
      <div className="resume-title">{title}</div>
      <div className="resume-date">{date}</div>
      <div className="resume-techs">{techs}</div>
      <div className="resume-desc" dangerouslySetInnerHTML={{__html: desc}}></div>
    </div>
  )
}
