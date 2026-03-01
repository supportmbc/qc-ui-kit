import React from 'react';
import type { TreeDataNode } from 'antd';

import Tree from './Tree';

export default {
  title: 'Components/Tree',
  component: Tree,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

const items: TreeDataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'leaf',
        key: '0-0-0'
      },
      {
        title: 'leaf',
        key: '0-0-1'
      }
    ]
  }
];

export const ToStorybook = () => (
  <>
    <Tree showIcon defaultExpandAll defaultSelectedKeys={['0-0-0']} treeData={items} />
  </>
);

ToStorybook.story = {
  name: 'Tree',
  args: {
    title: 'Tree component'
  }
};
