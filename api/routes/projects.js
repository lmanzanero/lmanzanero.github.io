const express = require('express');
const router = express.Router();

const ProjectsController = require('../controllers/projects'); 
const { route } = require('./admin');

router.get('/', ProjectsController.all_projects);
router.post('/', ProjectsController.create_project);
router.get('/:id', ProjectsController.find_project);


module.exports = router;