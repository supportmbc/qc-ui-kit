import React from 'react';

import Radio, { RadioGroup, RadioButton } from './Radio';

export default {
  title: 'Components/Fields/Radio',
  component: Radio,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = props => (
  <>
    <Radio {...props}>Option 1</Radio>
    <Radio {...props}>Option 2</Radio>

    <RadioGroup defaultValue="c">
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c" disabled>
        Option C
      </Radio>
    </RadioGroup>

    <RadioGroup defaultValue="a" buttonStyle="solid">
      <RadioButton value="a">A</RadioButton>
      <RadioButton value="b">B</RadioButton>
      <RadioButton value="c">C</RadioButton>
    </RadioGroup>
  </>
);

ToStorybook.story = {
  name: 'Radio',
  args: {
    title: 'Radio component'
  }
};
