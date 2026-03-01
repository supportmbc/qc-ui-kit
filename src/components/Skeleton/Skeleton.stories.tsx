import React from 'react';

import Spacer from 'components/Spacer';

import Skeleton from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    title: {
      control: 'text'
    },
    loading: { control: 'boolean', defaultValue: true },
    avatar: { control: 'boolean', defaultValue: false },
    active: { control: 'boolean', defaultValue: true },
    paragraph: { control: 'boolean', defaultValue: true }
  }
};

export const ToStorybook = () => (
  <div style={{ width: 500 }}>
    <Skeleton active />

    <Spacer size={16} />

    <Skeleton avatar active />

    <Spacer size={16} />

    <Skeleton active paragraph={{ rows: 2 }} />

    <Spacer size={16} />

    <Skeleton active avatar paragraph={{ rows: 3 }} />
  </div>
);

ToStorybook.story = {
  name: 'Skeleton',
  args: {
    title: 'Skeleton component'
  }
};
