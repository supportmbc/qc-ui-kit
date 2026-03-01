import React from 'react';

import Flex from 'components/Flex';

import Checkbox from './Checkbox';

export default {
  title: 'Components/Fields/Checkbox',
  component: Checkbox,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <Flex gap={8}>
    <Checkbox />
    <Checkbox checked />
    <Checkbox checked disabled />
  </Flex>
);

ToStorybook.story = {
  name: 'Checkbox',
  args: {
    title: 'Checkbox component'
  }
};
