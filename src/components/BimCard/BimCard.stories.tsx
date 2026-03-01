import React from 'react';

import Img from '../../assets/images/bim.png';

import BimCard from './BimCard';

export default {
  title: 'Components/BimCard',
  component: BimCard,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <div style={{ width: 435 }}>
    <BimCard src={Img} name="ЖК 'REGNUM PLAZA'" onClick={() => {}} />
  </div>
);

ToStorybook.story = {
  name: 'BimCard',
  args: {
    title: 'BimCard component'
  }
};
