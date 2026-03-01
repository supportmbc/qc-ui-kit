import React from 'react';

import * as Grid from 'components/Grid';

import Select from './Select';

export default {
  title: 'Components/Fields/Select',
  component: Select,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = props => (
  <div style={{ width: 500 }}>
    <Grid.Row gutter={[20, 20]}>
      <Grid.Col xs={24}>
        <Select
          {...props}
          mode="multiple"
          options={[
            {
              title: 'Option 1',
              value: '1'
            },
            {
              title: 'Option 2',
              value: '2',
              children: [
                {
                  title: 'Option 2.1',
                  value: '2.1'
                },
                {
                  title: 'Option 2.2',
                  value: '2.2'
                }
              ]
            },
            {
              title: 'Option 3',
              value: '3'
            },
            {
              title: 'Option 4',
              value: '4'
            }
          ]}
          size="small"
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <Select
          {...props}
          mode="multiple"
          options={[
            {
              title: 'Option 1',
              value: '1'
            },
            {
              title: 'Option 2',
              value: '2',
              children: [
                {
                  title: 'Option 2.1',
                  value: '2.1'
                },
                {
                  title: 'Option 2.2',
                  value: '2.2'
                }
              ]
            },
            {
              title: 'Option 3',
              value: '3'
            },
            {
              title: 'Option 4',
              value: '4'
            }
          ]}
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <Select
          {...props}
          mode="multiple"
          options={[
            {
              title: 'Option 1',
              value: '1'
            },
            {
              title: 'Option 2',
              value: '2',
              children: [
                {
                  title: 'Option 2.1',
                  value: '2.1'
                },
                {
                  title: 'Option 2.2',
                  value: '2.2'
                }
              ]
            },
            {
              title: 'Option 3',
              value: '3'
            },
            {
              title: 'Option 4',
              value: '4'
            }
          ]}
          size="large"
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <Select {...props} disabled />
      </Grid.Col>
    </Grid.Row>
  </div>
);

ToStorybook.story = {
  name: 'Select',
  args: {
    title: 'Select component'
  }
};
