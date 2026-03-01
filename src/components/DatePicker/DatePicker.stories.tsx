import React from 'react';

import Spacer from 'components/Spacer';

import DatePicker from './DatePicker';

export default {
  title: 'Components/Fields/DatePicker',
  component: DatePicker,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = props => (
  <>
    <DatePicker {...props} size="small" />

    <Spacer size={16} />

    <DatePicker {...props} size="middle" />

    <Spacer size={16} />

    <DatePicker {...props} size="large" />
  </>
);

ToStorybook.story = {
  name: 'DatePicker',
  args: {
    title: 'DatePicker component'
  }
};
