import React from 'react';

import Flex from 'components/Flex';
import Spacer from 'components/Spacer';

import Progress from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <>
    <Flex gap="small" wrap>
      <Progress type="circle" percent={75} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="circle" percent={100} />
    </Flex>
    <Spacer size={24} />
    <Flex gap="small" vertical>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </Flex>
  </>
);

ToStorybook.story = {
  name: 'Progress',
  args: {
    title: 'Progress component'
  }
};
