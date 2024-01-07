module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      'module:@react-native/babel-preset',
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
  };
};
