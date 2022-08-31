const possiblePaths = {
  application: require('../../../docs/api-reference/application.md'),
  general: require('../../../docs/api-reference/general.md'),
  setup: require('../../../docs/api-reference/setup.md'),
  'lifecycle-hook': require('../../../docs/api-reference/lifecycle-hook.md'),
};

export const getTocFromItem = id => {
  return possiblePaths[id].toc;
};
