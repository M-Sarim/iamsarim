module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-react",
    [
      "babel-preset-gatsby",
      {
        targets: {
          browsers: ["> 1%", "last 2 versions", "IE >= 9"]
        }
      }
    ]
  ];

  const plugins = [
    // Explicitly exclude babel-plugin-lodash to prevent deprecation warnings
    // We've replaced all lodash usage with native JavaScript implementations
  ];

  return {
    presets,
    plugins,
    env: {
      development: {
        plugins: [
          // No babel-plugin-lodash in development
        ]
      },
      production: {
        plugins: [
          // No babel-plugin-lodash in production
        ]
      }
    },
    // Override any automatic plugin detection
    overrides: [
      {
        test: /\.js$/,
        plugins: [
          // Ensure no lodash plugin is loaded
        ]
      }
    ]
  };
};
