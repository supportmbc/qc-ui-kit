import React, { useState } from 'react';

import Icon from 'components/Icon';

import Mask from './Mask';
import { MASK_TYPE } from './Types';

export default {
  title: 'Components/Fields/Mask',
  component: Mask,
  argTypes: {
    state: {
      control: { type: 'select' }
    },
    iconPrefix: {
      control: {
        disable: true
      }
    },
    iconSuffix: {
      control: {
        disable: true
      }
    },
    mask: {
      control: {
        type: 'text'
      }
    },
    maskType: {
      options: [MASK_TYPE.TEXT, MASK_TYPE.NUMBER],
      control: { type: 'select' }
    },
    lazy: {
      control: { type: 'boolean' }
    },
    unmask: {
      control: { type: 'boolean' }
    },
    placeholderChar: {
      control: {
        type: 'text'
      }
    },
    value: {
      control: {
        disable: true
      }
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' }
  }
};

export const ToStorybook = ({ title, mask, ...props }) => {
  const [value, setValue] = useState('');

  return (
    <div style={{ width: 360 }}>
      <Mask
        id="mask-field"
        {...props}
        {...{ title, mask, value }}
        onChange={value => {
          props.onChange(value);
          setValue(value);
        }}
      />
    </div>
  );
};

ToStorybook.story = {
  name: 'Mask',
  args: {
    mask: '## ### ## ##',
    maskType: MASK_TYPE.TEXT,
    value: '',
    prefix: '+998',
    lazy: true,
    suffix: '',
    placeholder: '00 000 00 00',
    iconPrefix: <Icon name="Search" />,
    iconSuffix: <Icon name="Close" />
  }
};
