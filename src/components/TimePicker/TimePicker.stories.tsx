import React from 'react';

import Spacer from 'components/Spacer';

import TimePicker from './TimePicker';

export default {
  title: 'Components/Fields/TimePicker',
  component: TimePicker,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = props => (
  <>
    <TimePicker {...props} size="small" />

    <Spacer size={16} />

    <TimePicker {...props} size="middle" />

    <Spacer size={16} />

    <TimePicker {...props} size="large" />
  </>
);

ToStorybook.story = {
  name: 'TimePicker',
  args: {
    title: 'TimePicker component'
  }
};
