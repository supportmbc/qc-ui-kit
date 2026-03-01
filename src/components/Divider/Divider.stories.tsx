import React from 'react';

import Divider from './Divider';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <div style={{ padding: 20, background: '#fff' }}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt
      a te dicta? Refert tamen, quo modo.
    </p>
    <Divider>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt
      a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt
      a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt
      a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left" orientationMargin="0">
      Left Text with 0 orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt
      a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" orientationMargin={50}>
      Right Text with 50px orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt
      a te dicta? Refert tamen, quo modo.
    </p>
  </div>
);

ToStorybook.story = {
  name: 'Divider',
  args: {
    title: 'Divider component'
  }
};
