import React, { useState } from 'react';

import Icon from 'components/Icon';

import Input from './Input';

export default {
  title: 'Components/Fields/Input',
  component: Input,
  argTypes: {
    state: {
      control: {
        type: 'select'
      }
    },
    iconPrefix: {
      control: {
        disable: true,
        name: 'Prefix Icon'
      }
    },
    iconSuffix: {
      control: {
        disable: true,
        name: 'Suffix Icon'
      }
    }
  }
};

export const ToStorybook = props => {
  const [value, setValue] = useState<string>('');

  return (
    <div style={{ width: '400px' }}>
      <Input {...props} onChange={setValue} value={value} />
    </div>
  );
};

ToStorybook.story = {
  name: 'Input',
  args: {
    value: 'Qiymat kiritildi',
    iconPrefix: <Icon name="Search" />,
    iconSuffix: <Icon name="CloseCircle" />
  }
};
