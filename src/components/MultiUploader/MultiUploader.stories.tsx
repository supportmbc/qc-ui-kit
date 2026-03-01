import React from 'react';

import * as Grid from 'components/Grid';

import MultiUploader from './MultiUploader';

export default {
  title: 'Components/Fields/MultiUploader',
  component: MultiUploader,
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
        <MultiUploader
          files={[]}
          details={{
            extension: '.pdf, .doc, .docx'
          }}
          onSelect={() => {}}
          onRemove={() => {}}
          accept={['.pdf', '.doc', '.docx']}
          type="file"
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <MultiUploader
          files={[]}
          details={{
            extension: '.png, .jpg, .jpeg'
          }}
          onSelect={() => {}}
          onRemove={() => {}}
          accept={['.png', '.jpg', '.jpeg']}
          type="image"
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <MultiUploader
          files={[]}
          details={{
            extension: '.mp4, .mkv'
          }}
          onSelect={() => {}}
          onRemove={() => {}}
          accept={['.mp4', '.mkv']}
          type="video"
        />
      </Grid.Col>
    </Grid.Row>
  </div>
);

ToStorybook.story = {
  name: 'MultiUploader',
  args: {
    title: 'MultiUploader component'
  }
};
