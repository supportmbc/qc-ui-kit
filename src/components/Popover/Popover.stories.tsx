import React from 'react';

import Button from 'components/Button';

import Popover from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export const ToStorybook = () => (
  <>
    <Popover content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </>
);

ToStorybook.story = {
  name: 'Popover',
  args: {
    title: 'Popover component'
  }
};
