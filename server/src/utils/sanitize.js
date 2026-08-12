const sanitize = (value = '') =>
  String(value)
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 5000);

module.exports = { sanitize };
