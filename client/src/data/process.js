export const processSteps = [
  ['01', 'discovery', 'search'],
  ['02', 'strategy', 'compass'],
  ['03', 'uxui', 'pen'],
  ['04', 'development', 'code'],
  ['05', 'testing', 'test'],
  ['06', 'launch', 'rocket'],
  ['07', 'support', 'support'],
].map(([number, id, icon]) => ({
  id,
  number,
  icon,
  titleKey: `process.steps.${id}.title`,
  descKey: `process.steps.${id}.desc`,
}))
