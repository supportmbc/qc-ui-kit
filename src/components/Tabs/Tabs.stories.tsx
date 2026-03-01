import React from 'react';

import Icon from 'components/Icon';
import Spacer from 'components/Spacer';

import Tabs from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

const items = [
  {
    key: '1',
    label: 'Tab 1',
    icon: <Icon name="IdCard" size={20} />,
    content: <div>Content of Tab 1</div>
  },
  { key: '2', label: 'Tab 2', icon: <Icon name="ListView" size={20} />, content: <div>Content of Tab 2</div> }
];

export const ToStorybook = props => (
  <>
    <Tabs {...props} items={items} />

    <Spacer size={20} />

    <Tabs {...props} type="card" items={items} />
  </>
);

ToStorybook.story = {
  name: 'Tabs',
  args: {
    title: 'Tabs component'
  }
};
