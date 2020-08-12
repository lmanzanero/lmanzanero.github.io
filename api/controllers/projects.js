const mongoose = require("mongoose");
const Projects = require('../models/Projects');

exports.all_projects = async(req, res, next ) => { 
   const projects =  await Projects.find()
   res.send(projects); 
}

exports.create_project = async (req, res, next) => {
  const post = new Projects({
    title: req.body.title,
    content: req.body.content
  })
  await post.save()
  res.send(post)
}