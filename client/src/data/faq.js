export const faqItems = [
  'cost', 'timeline', 'crm', 'mobile', 'api', 'maintenance', 'redesign', 'smb', 'scratch',
].map((id) => ({
  id,
  questionKey: `faq.items.${id}.q`,
  answerKey: `faq.items.${id}.a`,
}));
