import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

// noinspection ES6PreferShortImport
import { theme } from '../src/lib/styled';

const uiTheme = create({
  base: 'light',

  colorPrimary: theme.palette.primary_400,
  colorSecondary: theme.palette.primary_400,

  appBg: theme.palette.white,
  appContentBg: theme.palette.white,
  appBorderColor: theme.palette.grey_200,
  appBorderRadius: 4,

  fontBase: 'sans-serif',
  fontCode: 'monospace',

  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  barTextColor: theme.palette.grey_900,
  barSelectedColor: theme.palette.grey_900,
  barBg: theme.palette.white,

  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'p5.su',
  brandUrl: '/',
  brandImage: './images/logo.svg',

});

addons.setConfig({ theme: uiTheme });
