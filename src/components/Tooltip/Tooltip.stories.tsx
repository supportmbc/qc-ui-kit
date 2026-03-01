import React from 'react';

import Tooltip from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <Tooltip />
  </>
);

ToStorybook.story = {
  name: 'Tooltip',
  args: {
    title: 'Tooltip component'
  }
};
