const express = require('express');
const { contactValidation, submitContact } = require('../controllers/contactController');
const { contactLimiter } = require('../middleware/rateLimiter');
const {
  getProjects,
  getProjectById,
  getServices,
  getServiceBySlug,
  getFaq,
} = require('../controllers/contentController');

const router = express.Router();

router.post('/contact', contactLimiter, contactValidation, submitContact);
router.get('/projects', getProjects);
router.get('/projects/:id', getProjectById);
router.get('/services', getServices);
router.get('/services/:slug', getServiceBySlug);
router.get('/faq', getFaq);

router.get('/health', (req, res) => {
  res.json({ success: true, status: 'ok' });
});

module.exports = router;
