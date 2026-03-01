import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Grid from 'components/Grid';

import PieChart from './PieChart';

export default {
  title: 'Components/Chart/PieChart',
  component: PieChart,
  argTypes: {}
};

const item = {
  NEW: 44,
  IN_PROGRESS: 55,
  IN_REVIEW: 41,
  NOT_FIXED: 17,
  FIXED: 15
};

export const ToStorybook = () => {
  const { t } = useTranslation();

  return (
    <Grid.Row gutter={[16, 20]}>
      <Grid.Col xs={8}>
        <PieChart
          title="Статистика по обычным замечаниям"
          description=""
          series={Object.values(item)}
          labels={Object.keys(item).map(key => t(`enum_defect_status_${key}`))}
          colors={['#D2D2D7', '#5BC9FB', '#FF9500', '#FF3B30', '#35C85A']}
        />
      </Grid.Col>
      <Grid.Col xs={8}>
        <PieChart
          title="Статистика по критичным замечаниям"
          description=""
          series={Object.values(item)}
          labels={Object.keys(item).map(key => t(`enum_defect_status_${key}`))}
          colors={['#D2D2D7', '#5BC9FB', '#FF9500', '#FF3B30', '#35C85A']}
        />
      </Grid.Col>
      <Grid.Col xs={8}>
        <PieChart
          title="Статистика по рекомендациям"
          description=""
          series={Object.values(item)}
          labels={Object.keys(item).map(key => t(`enum_defect_status_${key}`))}
          colors={['#D2D2D7', '#5BC9FB', '#FF9500', '#FF3B30', '#35C85A']}
        />
      </Grid.Col>
      <Grid.Col xs={12}>
        <PieChart
          title="Статистика по рекомендациям"
          description=""
          series={Object.values(item)}
          labels={Object.keys(item).map(key => t(`enum_defect_status_${key}`))}
          colors={['#D2D2D7', '#5BC9FB', '#FF9500', '#FF3B30', '#35C85A']}
          height={300}
        />
      </Grid.Col>
      <Grid.Col xs={12}>
        <PieChart
          title="Статистика по рекомендациям"
          description=""
          series={Object.values(item)}
          labels={Object.keys(item).map(key => t(`enum_defect_status_${key}`))}
          colors={['#D2D2D7', '#5BC9FB', '#FF9500', '#FF3B30', '#35C85A']}
          height={300}
          size="0"
          show={false}
        />
      </Grid.Col>
    </Grid.Row>
  );
};

ToStorybook.story = {
  name: 'PieChart'
};
