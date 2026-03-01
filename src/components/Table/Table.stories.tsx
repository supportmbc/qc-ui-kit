import React from 'react';

import Icon from 'components/Icon';

import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {}
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: <Table.Content.Settings />,
    width: 45,
    fixed: 'right',
    align: 'center',
    render: () => (
      <Table.Content.More
        items={[
          {
            title: 'Edit',
            icon: <Icon name="Edit" />,
            variant: 'blue'
          },
          {
            title: 'Delete',
            icon: <Icon name="Delete" />,
            variant: 'danger'
          }
        ]}
      />
    )
  }
];

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney'
  }
];

export const ToStorybook = props => (
  <>
    <Table {...props} style={{ width: 500 }} columns={columns} dataSource={dataSource} bordered />
  </>
);

ToStorybook.story = {
  name: 'Table',
  args: {}
};
