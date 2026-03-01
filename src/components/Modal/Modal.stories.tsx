import React, { useState } from 'react';

import Button from 'components/Button';

import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    title: {
      control: 'text'
    },
    open: { control: 'boolean' },
    footer: { control: false }
  }
};

export const ToStorybook = props => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} type="primary">
        Open Modal
      </Button>

      <Modal {...props} open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>
        <p>This is a custom Modal content</p>
      </Modal>
    </>
  );
};

ToStorybook.story = {
  name: 'Modal',
  args: {
    title: 'Modal component'
  }
};
