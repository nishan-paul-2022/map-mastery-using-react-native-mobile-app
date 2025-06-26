module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Existing reanimated plugin
      'react-native-reanimated/plugin',
      // Add module resolver for @ imports
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.js', '.ts', '.cjs', '.cts', '.jsx', '.tsx', '.svg', '.json'],
          alias: {
            '@': '.',
          },
        },
      ],
    ],
  };
};
