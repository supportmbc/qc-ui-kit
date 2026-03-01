import React from 'react';

import Spacer from 'components/Spacer';
import Button from 'components/Button';

import PopConfirm from './PopConfirm';

export default {
  title: 'Components/PopConfirm',
  component: PopConfirm,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <PopConfirm title="Delete the task" description="Are you sure to delete this task?" okText="Yes" cancelText="No">
      <Button danger>Delete</Button>
    </PopConfirm>
    <Spacer size={24} />
    <PopConfirm title="Thanks for using antd. Have a nice day !" open>
      <Button type="primary">Scroll The Window</Button>
    </PopConfirm>
  </>
);

ToStorybook.story = {
  name: 'PopConfirm',
  args: {
    title: 'PopConfirm component'
  }
};
