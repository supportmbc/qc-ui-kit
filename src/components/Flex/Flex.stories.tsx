import React from 'react';

import Button from 'components/Button';

import Flex from './Flex';

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => {
  return (
    <>
      <Flex justify="space-between" align="center">
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
      </Flex>
    </>
  );
};

ToStorybook.story = {
  name: 'Modal',
  args: {
    title: 'Flex component'
  }
};
