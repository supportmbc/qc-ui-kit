import React, { useState } from 'react';

import Button from 'components/Button';

import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => {
  const [random, setRandom] = useState<number>(Date.now());

  return (
    <>
      <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />

      <Image
        width={200}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />

      <Button
        onClick={() => {
          setRandom(Date.now());
        }}
        type="primary"
      >
        Reload
      </Button>
    </>
  );
};

ToStorybook.story = {
  name: 'Image',
  args: {
    title: 'Image component'
  }
};
