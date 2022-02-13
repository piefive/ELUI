const path = require('path');

const getPath = (...p) => path.resolve(process.cwd(), ...p);

module.exports = {
  staticDirs: ['../public'],
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {
          babelOptions: {
            plugins: [
              ['@babel/plugin-proposal-private-property-in-object', {
                loose: true
              }],
            ],
          },
        },
        sourceLoaderOptions: { parser: 'typescript' }
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
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
