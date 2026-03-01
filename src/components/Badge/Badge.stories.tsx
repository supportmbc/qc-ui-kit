import React from 'react';

import Icon from 'components/Icon';
import Spacer from 'components/Spacer';

import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = props => (
  <>
    <Badge {...props} count={5} color="primary">
      <div style={{ display: 'flex', alignItems: 'center', padding: 5 }}>
        <Icon name="Add" size={20} /> Home
      </div>
    </Badge>
    <Spacer size={24} />
    <Badge {...props} count={100000} color="danger">
      <div style={{ padding: 10 }}>Profile</div>
    </Badge>
  </>
);

ToStorybook.story = {
  name: 'Badge',
  args: {
    title: 'Badge component'
  }
};
