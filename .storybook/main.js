const path = require('path');

const getPath = (...p) => path.resolve(process.cwd(), ...p);

module.exports = {
    staticDirs: ['../public'],
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', './GetStarted.stories.mdx'],
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
        '@storybook/addon-controls',
        '@storybook/addon-actions',
        '@storybook/addon-viewport',
        '@storybook/addon-toolbars',
        '@storybook/addon-measure',
        '@storybook/addon-outline',
    ],
    webpackFinal: async config => ({
        ...config,
        resolve: {
            ...config.resolve,
            modules: [...config.resolve.modules, getPath('src')],
        },
    }),
}
