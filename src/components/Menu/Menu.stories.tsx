import React, { useState } from 'react';
import { MenuProps } from 'antd/lib/menu';

import Spacer from 'components/Spacer';

import Menu from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    title: {
      control: 'text'
    },
    mode: {
      control: 'select',
      options: ['horizontal', 'vertical', 'inline'],
      defaultValue: 'horizontal'
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      defaultValue: 'light'
    }
  }
};

const items = [
  {
    label: 'Home',
    key: 'home'
  },
  {
    label: 'About',
    key: 'about'
  },
  {
    label: 'Services',
    key: 'services',
    children: [
      {
        label: 'Web Development',
        key: 'web'
      },
      {
        label: 'Mobile Development',
        key: 'mobile'
      }
    ]
  },
  {
    label: 'Contact',
    key: 'contact'
  }
];

export const ToStorybook = props => {
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };

  return (
    <div style={{ width: 300 }}>
      <Menu {...props} onClick={onClick} selectedKeys={[current]} items={items} />

      <Spacer size={16} />

      <Menu mode="inline" defaultOpenKeys={['services']} items={items} />
    </div>
  );
};

ToStorybook.story = {
  name: 'Menu',
  args: {
    title: 'Menu component'
  }
};
