import React from 'react';

import Timeline from './Timeline';

export default {
  title: 'Components/Timeline',
  component: Timeline,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <Timeline
      items={[
        {
          children: 'Create a services site 2015-09-01'
        },
        {
          children: 'Solve initial network problems 2015-09-01'
        },
        {
          children: 'Technical testing 2015-09-01'
        },
        {
          children: 'Network problems being solved 2015-09-01'
        }
      ]}
    />
  </>
);

ToStorybook.story = {
  name: 'Timeline',
  args: {
    title: 'Timeline component'
  }
};
