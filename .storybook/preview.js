import { sortStories } from './utils';
import {addDecorator, addParameters} from "@storybook/react";
import {DocsContainer, DocsPage} from "@storybook/addon-docs";

// noinspection ES6PreferShortImport
import { ConfigProvider } from "../src/components/ConfigProvider";

addDecorator(storyFn => (
    <ConfigProvider fontURL="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap">
      {storyFn()}
    </ConfigProvider>
));


const SORT_ORDER = {
  Introduction: ['Getting Started'],
  UI: [],
};

addParameters({
  options: {
    storySort: sortStories(SORT_ORDER),
    showRoots: true
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  actions: { argTypesRegex: '^on.*' },
  controls: { hideNoControlsWarning: true },
});
