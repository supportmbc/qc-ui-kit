import React from 'react';

import Spacer from 'components/Spacer';

import Rate from './Rate';

export default {
  title: 'Components/Rate',
  component: Rate,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <Rate allowHalf defaultValue={2.5} />
    <Spacer size={24} />
    <Rate disabled defaultValue={2} />
    <Spacer size={24} />
    <Rate defaultValue={3} />
  </>
);

ToStorybook.story = {
  name: 'Rate',
  args: {
    title: 'Rate component'
  }
};
