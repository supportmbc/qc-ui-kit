import React from 'react';

import Spacer from 'components/Spacer';

import Box from './Box';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <Box>
      <h3>Asynchronously close on Promise</h3>

      <p>
        Asynchronously close a popconfirm when the OK button is pressed. For example, you can use this pattern when you
        submit a form.
      </p>
    </Box>

    <Spacer size={16} />

    <Box padding={[10, 5]} borderRadius={0}>
      <h3>Asynchronously close on Promise</h3>

      <p>
        Asynchronously close a popconfirm when the OK button is pressed. For example, you can use this pattern when you
        submit a form.
      </p>
    </Box>
  </>
);

ToStorybook.story = {
  name: 'Box',
  args: {
    title: 'Box component'
  }
};
