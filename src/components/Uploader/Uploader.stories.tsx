import React from 'react';

import * as Grid from 'components/Grid';

import Uploader from './Uploader';

export default {
  title: 'Components/Fields/Uploader',
  component: Uploader,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <div style={{ width: 500 }}>
    <Grid.Row gutter={[20, 20]}>
      <Grid.Col xs={24}>
        <Uploader
          details={{
            extension: '.pdf, .doc, .docx'
          }}
          onSelect={() => {}}
          accept={['.pdf', '.doc', '.docx']}
          type="file"
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <Uploader
          details={{
            extension: '.png, .jpg, .jpeg'
          }}
          onSelect={() => {}}
          accept={['.png', '.jpg', '.jpeg']}
          type="image"
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <Uploader
          details={{
            extension: '.mp4, .mkv'
          }}
          onSelect={() => {}}
          accept={['.mp4', '.mkv']}
          type="video"
        />
      </Grid.Col>
    </Grid.Row>
  </div>
);

ToStorybook.story = {
  name: 'Uploader',
  args: {
    title: 'Uploader component'
  }
};
