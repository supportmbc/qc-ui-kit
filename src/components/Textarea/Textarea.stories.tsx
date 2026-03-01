import React, { useState } from 'react';

import Textarea from './Textarea';

export default {
  title: 'Components/Fields/Textarea',
  component: Textarea,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = props => {
  const [value, setValue] = useState('');

  return (
    <div style={{ width: 500 }}>
      <Textarea
        {...props}
        id="test"
        onChange={v => setValue(v)}
        value={value}
        autoSize={{
          minRows: 5,
          maxRows: 10
        }}
      />

      <Textarea
        {...props}
        id="test"
        onChange={v => setValue(v)}
        value={value}
        autoSize={{
          minRows: 5,
          maxRows: 10
        }}
        state="error"
      />
    </div>
  );
};

ToStorybook.story = {
  name: 'Textarea',
  args: {
    title: 'Textarea component'
  }
};
