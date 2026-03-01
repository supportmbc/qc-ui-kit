import React from 'react';

import ColorPicker from './ColorPicker';

export default {
  title: 'Components/Fields/ColorPicker',
  component: ColorPicker,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = props => (
  <>
    <ColorPicker {...props} />
  </>
);

ToStorybook.story = {
  name: 'ColorPicker',
  args: {
    title: 'ColorPicker component'
  }
};
