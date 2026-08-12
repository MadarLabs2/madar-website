const { body, validationResult } = require('express-validator');
const { sanitize } = require('../utils/sanitize');

const contactValidation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required').isLength({ max: 120 }),
  body('businessName').optional().trim().isLength({ max: 160 }),
  body('email').trim().isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('service').optional({ values: 'falsy' }).trim().isLength({ max: 80 }),
  body('budget').optional({ values: 'falsy' }).trim().isLength({ max: 80 }),
  body('phone').optional({ values: 'falsy' }).trim().isLength({ max: 40 }),
  body('message').trim().notEmpty().withMessage('Project description is required').isLength({ min: 10, max: 5000 }),
];

const submitContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      });
    }

    const payload = {
      fullName: sanitize(req.body.fullName),
      businessName: sanitize(req.body.businessName || ''),
      email: sanitize(req.body.email),
      phone: sanitize(req.body.phone || ''),
      service: sanitize(req.body.service),
      budget: sanitize(req.body.budget || ''),
      message: sanitize(req.body.message),
      receivedAt: new Date().toISOString(),
    };

    // Persist / email integration can be wired here.
    // For production readiness we acknowledge and log safely.
    if (process.env.NODE_ENV !== 'production') {
      console.log('[contact]', {
        email: payload.email,
        service: payload.service,
        receivedAt: payload.receivedAt,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Project request received. We will get back to you soon.',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { contactValidation, submitContact };
