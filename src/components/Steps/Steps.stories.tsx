import React from 'react';

import Steps from './Steps';

export default {
  title: 'Components/Steps',
  component: Steps,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = props => (
  <>
    <Steps
      {...props}
      current={1}
      items={[
        {
          title: 'Finished',
          description: 'This is a description.'
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
          subTitle: 'Left 00:00:08'
        },
        {
          title: 'Waiting',
          description: 'This is a description.'
        }
      ]}
    />
  </>
);

ToStorybook.story = {
  name: 'Steps',
  args: {
    title: 'Steps component'
  }
};
