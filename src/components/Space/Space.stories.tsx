import React from 'react';

import Button from 'components/Button';

import Space from './Space';

export default {
  title: 'Components/Space',
  component: Space,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <Space size={[8, 16]} wrap>
    {Array.from({ length: 20 }).map((_, index) => (
      <Button key={index}>Button</Button>
    ))}
  </Space>
);

ToStorybook.story = {
  name: 'Space',
  args: {
    title: 'Space component'
  }
};
