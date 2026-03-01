import React from 'react';

import Spacer from 'components/Spacer';

import Spinner from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <Spinner />

    <Spacer size={24} />

    <Spinner size="large" />
  </>
);

ToStorybook.story = {
  name: 'Spinner',
  args: {
    title: 'Spinner component'
  }
};
