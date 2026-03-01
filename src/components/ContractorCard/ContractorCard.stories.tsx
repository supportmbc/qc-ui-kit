import React from 'react';

import Spacer from 'components/Spacer';

import ContractorCard from './ContractorCard';

export default {
  title: 'Components/ContractorCard',
  component: ContractorCard,
  argTypes: {
    title: {
      control: 'text'
    }
  }
};

export const ToStorybook = () => (
  <div style={{ width: 1000 }}>
    <ContractorCard
      title="Генподрядчики"
      items={[
        {
          id: 1,
          name: "ООО 'Строй-Групп'\t",
          notFixedCount: 5,
          director: {
            fullName: 'Islombek Qurbonov',
            phone: '+998887777777'
          }
        },
        {
          id: 2,
          name: "ООО 'Строй-Групп'\t",
          notFixedCount: 3,
          director: {
            fullName: 'Islombek Qurbonov',
            phone: '+998887777777'
          }
        },
        {
          id: 3,
          name: "ООО 'Строй-Групп'\t",
          notFixedCount: 12,
          director: {
            fullName: 'Islombek Qurbonov',
            phone: '+998887777777'
          }
        }
      ]}
    />

    <Spacer size={24} />

    <ContractorCard
      title="Субподрядчики"
      items={[
        {
          id: 1,
          name: "ООО 'Строй-Групп'\t",
          notFixedCount: 8,
          director: {
            fullName: 'Islombek Qurbonov',
            phone: '+998887777777'
          }
        },
        {
          id: 2,
          name: "ООО 'Строй-Групп'\t",
          notFixedCount: 3,
          director: {
            fullName: 'Islombek Qurbonov',
            phone: '+998887777777'
          }
        },
        {
          id: 3,
          name: "ООО 'Строй-Групп'\t",
          notFixedCount: 9,
          director: {
            fullName: 'Islombek Qurbonov',
            phone: '+998887777777'
          }
        }
      ]}
      onViewAll={() => {}}
    />
  </div>
);

ToStorybook.story = {
  name: 'ContractorCard',
  args: {
    title: 'ContractorCard component'
  }
};
