import React from 'react';

import Editor from './Editor';

export default {
  title: 'Components/Fields/Editor',
  component: Editor,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = props => {
  return (
    <div style={{ width: 800 }}>
      <Editor {...props} />
    </div>
  );
};

ToStorybook.story = {
  name: 'Editor',
  args: {
    title: 'Editor component'
  }
};
