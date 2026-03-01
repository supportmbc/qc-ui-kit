import React from 'react';
import { ItemType } from 'rc-collapse/es/interface';

import Collapse from './Collapse';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  argTypes: {
    items: { control: false }
  }
};

const collapseItems: ItemType[] = [
  {
    key: '1',
    label: 'Panel 1',
    children: <p>Content for panel 1</p>
  },
  {
    key: '2',
    label: 'Panel 2',
    children: <p>Content for panel 2</p>
  },
  {
    key: '3',
    label: 'Panel 3',
    children: <p>Content for panel 3</p>
  }
];

export const ToStorybook = props => (
  <>
    <Collapse {...props} style={{ width: 500 }} items={collapseItems} defaultActiveKey={['1']} />
  </>
);

ToStorybook.story = {
  name: 'Collapse'
};
