import React from 'react';

import Title from './Title';

import cls from './Title.module.scss';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <Title className={cls.large} text="Projects" />

    <Title text="Report" />
  </>
);

ToStorybook.story = {
  name: 'Title',
  args: {
    title: 'Title component'
  }
};
