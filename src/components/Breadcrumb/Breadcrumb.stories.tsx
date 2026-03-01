import React from 'react';

import Breadcrumb from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    title: {
      control: 'text'
    },
    items: {
      control: 'object'
    }
  }
};

export const ToStorybook = props => (
  <>
    <Breadcrumb
      {...props}
      items={[
        {
          title: 'Home'
        },
        {
          title: 'An Application'
        }
      ]}
    />
  </>
);

ToStorybook.story = {
  name: 'Breadcrumb',
  args: {
    title: 'Breadcrumb component'
  }
};
