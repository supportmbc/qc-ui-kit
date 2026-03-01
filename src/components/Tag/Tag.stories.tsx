import React from 'react';

import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
  </>
);

ToStorybook.story = {
  name: 'Tag',
  args: {
    title: 'Tag component'
  }
};
