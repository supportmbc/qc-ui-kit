import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

import Logo from './logo.svg';

const theme = create({
  base: 'dark',
  brandTitle: 'MBC UI Kit',
  brandUrl: '',
  brandImage: Logo
});

addons.setConfig({
  theme,
  showPanel: true,
  panelPosition: 'right',
  selectedPanel: 'addon-controls'
});
