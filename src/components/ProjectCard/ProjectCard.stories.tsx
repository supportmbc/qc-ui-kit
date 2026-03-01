import React from 'react';

import Img from '../../assets/images/project.png';

import ProjectCard from './ProjectCard';

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <div style={{ width: 435 }}>
    <ProjectCard
      src={Img}
      name="ЖК 'REGNUM PLAZA'"
      manager={{
        fullName: 'Сидоров А.В.',
        phone: '998901234567'
      }}
    />
  </div>
);

ToStorybook.story = {
  name: 'ProjectCard',
  args: {
    title: 'ProjectCard component'
  }
};
