import React from 'react';

import Drawer from './Drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <Drawer />
  </>
);

ToStorybook.story = {
  name: 'Drawer',
  args: {
    title: 'Drawer component'
  }
};
