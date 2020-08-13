const mongoose = require("mongoose");
const Projects = require('../models/Projects');

exports.all_projects = async(req, res, next ) => { 
   const projects =  await Projects.find();
   res.send(projects); 
}

exports.find_project = async(req, res, next ) => { 
  const project = await Projects.findById({ _id: req.params.id });
  res.send(project)
}

exports.create_project = async (req, res, next) => {
  console.log(req.body);
  const post = new Projects({
    title: req.body.title,
    img_url: req.body.img_url,
    url: req.body.url,
    category: ['web design']
  })
  await post.save()
  res.send(post)
}