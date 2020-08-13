const mongoose = require("mongoose");
const Projects = require('../models/Projects');

exports.all_projects = async(req, res, next ) => { 
   try {
    const projects =  await Projects.find();
    res.send(projects); 
   } catch (error) {
    console.log(error);
   } 
}

exports.find_project = async(req, res, next ) => { 
  try {
    const project = await Projects.findById({ _id: req.params.id });
    res.send(project)
  } catch (error) {
    console.log(error);
  }
}

exports.create_project = async (req, res, next) => {
  console.log(req.body);
  const post = new Projects({
    title: req.body.title,
    img_url: req.body.img_url,
    url: req.body.url,
    category: ['web design']
  })
 
  try {
    await post.save()
    res.send(post)
  } catch (error) {
    console.log(error);
  }
}