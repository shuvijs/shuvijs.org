const possiblePaths = {
  application: require('../../../docs/api-reference/application.md'),
  general: require('../../../docs/api-reference/general.md'),
  setup: require('../../../docs/api-reference/setup.md'),
  'lifecycle-hook': require('../../../docs/api-reference/lifecycle-hook.md'),
};

// filter the h2 header
export const getTocFromId = id => {
  return possiblePaths[id].toc.filter(({ level }) => level === 2);
};
