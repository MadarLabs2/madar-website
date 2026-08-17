require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5001,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  contactEmail: process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL || 'hello@madar-il.com',
  contactFromEmail: process.env.CONTACT_FROM_EMAIL || 'MADAR <onboarding@resend.dev>',
  rateLimit: {
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
    max: Number(process.env.RATE_LIMIT_MAX) || 20,
  },
};
