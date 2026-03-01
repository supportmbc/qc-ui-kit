import React from 'react';

import Icon from 'components/Icon';

import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

const items = [
  {
    key: '1',
    icon: <Icon name="Translation" size={20} />,
    label: 'Translation',
    onClick: () => {
      console.log('Translation');
    }
  },
  {
    key: '2',
    icon: <Icon name="User" size={20} />,
    label: 'Profile',
    onClick: () => {
      console.log('Profile');
    }
  }
];

export const ToStorybook = props => (
  <>
    <Dropdown {...props} menu={{ items }} trigger={['click']}>
      Home
    </Dropdown>
  </>
);

ToStorybook.story = {
  name: 'Dropdown',
  args: {
    title: 'Dropdown component'
  }
};
