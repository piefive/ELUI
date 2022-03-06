import { addDecorator, addParameters, configure } from "@storybook/react";
import { DocsContainer, DocsPage } from "@storybook/addon-docs";

import { sortStories } from './utils';

// noinspection ES6PreferShortImport
import { ConfigProvider } from "../src/components/ConfigProvider";

//configure(require.context('../src', true, /\.stories\.mdx$/), module);

addDecorator(storyFn => (
    <ConfigProvider fontURL="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap">
      {storyFn()}
    </ConfigProvider>
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
  actions: { argTypesRegex: '^on.*' },
  controls: { hideNoControlsWarning: true },
});
