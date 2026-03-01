import React, { useState } from 'react';

import Spacer from 'components/Spacer';

import Criticality from './Criticality';

export default {
  title: 'Components/Criticality',
  component: Criticality,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = props => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <div style={{ width: 800 }}>
      <Criticality {...props} onChange={v => setValue(v)} value={value} />

      <Spacer size={24} />
    </div>
  );
};

ToStorybook.story = {
  name: 'Criticality',
  args: {
    title: 'Criticality component'
  }
};
