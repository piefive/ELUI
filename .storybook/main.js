const path = require('path');

const getPath = (...p) => path.resolve(process.cwd(), ...p);

module.exports = {
  staticDirs: ['../public'],
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => ({
    ...config,
    resolve: {
      ...config.resolve,
      modules: [...config.resolve.modules, getPath('src')],
    },
  }),
}
