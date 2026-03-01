import React from 'react';

import Spacer from 'components/Spacer';

import DefectProcess from './DefectProcess';

export default {
  title: 'Components/DefectProcess',
  component: DefectProcess
};

export const ToStorybook = () => {
  return (
    <div style={{ padding: 16, background: '#FCFCFD' }}>
      <DefectProcess options={['Новый', 'В процессе', 'Проверка', 'Не устранено']} step={2} />

      <Spacer size={16} />

      <DefectProcess options={['Новый', 'В процессе', 'Проверка', 'Не устранено']} step={3} />

      <Spacer size={16} />

      <DefectProcess options={['Новый', 'В процессе', 'Проверка', 'Не устранено']} step={4} isFailed={true} />

      <Spacer size={16} />

      <DefectProcess options={['Новый', 'В процессе', 'Проверка', 'Не устранено']} step={4} />
    </div>
  );
};

ToStorybook.story = {
  name: 'DefectProcess'
};
