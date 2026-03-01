import React from 'react';

import Img from '../../assets/images/project.png';

import ProjectInfo from './ProjectInfo';

export default {
  title: 'Components/ProjectInfo',
  component: ProjectInfo,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <div style={{ width: 1000 }}>
    <ProjectInfo
      src={Img}
      name="ЖК “REGNUM PLAZA”"
      address="г. Ташкент, ул. Центральная, 10"
      customer='ООО "Murad Buildings"'
      area={15000}
      floorCount={12}
      users={[
        {
          id: 1,
          fullName: 'Сидоров А.В.',
          phone: '+998934567890',
          position: 'РП объекта'
        },
        {
          id: 2,
          fullName: 'Сидоров А.В.',
          phone: '+998934567890',
          position: 'ЗРП объекта'
        }
      ]}
    />
  </div>
);

ToStorybook.story = {
  name: 'ProjectInfo',
  args: {
    title: 'ProjectInfo component'
  }
};
