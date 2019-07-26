const randomWords = require('random-words');

const withCache = (fn, initialState = {}) => {
  const cache = {};
  return fn(cache);
};

const generateName = withCache(cache => (name, readonly) => {
  if (!readonly && !cache[name]) {
    cache[name] = randomWords({
      min: 1,
      max: 3,
      join: '_'
    });
  }

  return cache[name] || name;
});

module.exports = () => {
  const changeName = (obj, readonly = false) => {
    obj.name = generateName(obj.name, readonly);
    return obj.name;
  };

  return {
    visitor: {
      Identifier(path) {
        changeName(path.node, true);
      },
      FunctionDeclaration(path) {
        changeName(path.node.id);
        path.node.params.forEach(param => {
          changeName(param);
        });
      },
      CallExpression(path) {
        const calleePath = path.get('callee');
        changeName(calleePath.node);
      },
    }
  };
};
