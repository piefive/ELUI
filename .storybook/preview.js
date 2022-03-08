import {StrictMode} from 'react';
import {addDecorator, addParameters} from "@storybook/react";
import {DocsContainer, DocsPage} from "@storybook/addon-docs";

import {sortStories} from './utils';

// noinspection ES6PreferShortImport
import {ConfigProvider} from "../src/components/ConfigProvider";

//configure(require.context('../src', true, /\.stories\.mdx$/), module);

addDecorator(storyFn => (
  <StrictMode>
    <ConfigProvider fontURL="./fonts/fonts.css" paintWorklets={['./worklets/figma-smooth-corners.js']}>
      {storyFn()}
    </ConfigProvider>
  </StrictMode>
));


const SORT_ORDER = {
  Introduction: ['Getting Started'],
  UI: ['Button'],
  Mixins: []
};

addParameters({
  options: {
    storySort: sortStories(SORT_ORDER),
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  actions: {argTypesRegex: '^on.*'},
  controls: {hideNoControlsWarning: true},
});
