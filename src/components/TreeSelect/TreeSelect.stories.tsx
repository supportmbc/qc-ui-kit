import React from 'react';

import * as Grid from 'components/Grid';

import TreeSelect from './TreeSelect';

export default {
  title: 'Components/Fields/TreeSelect',
  component: TreeSelect,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = props => (
  <div style={{ width: 800 }}>
    <Grid.Row gutter={[20, 20]}>
      <Grid.Col xs={12}>
        <TreeSelect
          {...props}
          options={[
            {
              title: 'Parent 1',
              value: 'parent1',
              children: [
                {
                  title: 'Child 1',
                  value: 'child1'
                },
                {
                  title: 'Child 2',
                  value: 'child2'
                }
              ]
            },
            {
              title: 'Parent 2',
              value: 'parent2'
            }
          ]}
        />
      </Grid.Col>

      <Grid.Col xs={12}>
        <TreeSelect {...props} disabled />
      </Grid.Col>
    </Grid.Row>
  </div>
);

ToStorybook.story = {
  name: 'TreeSelect',
  args: {
    title: 'TreeSelect component'
  }
};
