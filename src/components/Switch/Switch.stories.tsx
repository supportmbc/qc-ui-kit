import React from 'react';

import Spacer from 'components/Spacer';

import Switch from './Switch';

export default {
  title: 'Components/Fields/Switch',
  component: Switch,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <Switch defaultChecked />
    <Spacer size={24} />
    <Switch loading defaultChecked />
    <Spacer size={24} />
    <Switch size="small" loading />
    <Spacer size={24} />
    <Switch size="small" defaultChecked />
  </>
);

ToStorybook.story = {
  name: 'Switch',
  args: {
    title: 'Switch component'
  }
};
