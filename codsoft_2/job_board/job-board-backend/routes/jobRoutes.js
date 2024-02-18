const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Define routes
router.get('/', jobController.getJobs);
router.get('/:id', jobController.getJobById);
router.post('/', jobController.postJob);
router.get('/jobs', jobController.fetchAndSaveJobs);


module.exports = router;
