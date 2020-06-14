const express = require('express');
const router = express.Router();

const ProjectsController = require('../controllers/projects');

router.get('/', ProjectsController.all_projects);


module.exports = router;