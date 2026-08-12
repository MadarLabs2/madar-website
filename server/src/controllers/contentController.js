const projects = require('../data/projects');
const services = require('../data/services');
const faq = require('../data/faq');

const getProjects = (req, res) => {
  const { category } = req.query;
  let data = projects;
  if (category && category !== 'all') {
    data = projects.filter((p) => p.category === category);
  }
  res.json({ success: true, data });
};

const getProjectById = (req, res) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ success: false, message: 'Project not found' });
  }
  res.json({ success: true, data: project });
};

const getServices = (req, res) => {
  res.json({ success: true, data: services });
};

const getServiceBySlug = (req, res) => {
  const service = services.find((s) => s.slug === req.params.slug);
  if (!service) {
    return res.status(404).json({ success: false, message: 'Service not found' });
  }
  res.json({ success: true, data: service });
};

const getFaq = (req, res) => {
  res.json({ success: true, data: faq });
};

module.exports = {
  getProjects,
  getProjectById,
  getServices,
  getServiceBySlug,
  getFaq,
};
