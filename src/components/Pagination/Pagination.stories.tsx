import React from 'react';

import Pagination from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <Pagination total={50} pageSize={10} />
  </>
);

ToStorybook.story = {
  name: 'Pagination',
  args: {
    title: 'Pagination component'
  }
};
