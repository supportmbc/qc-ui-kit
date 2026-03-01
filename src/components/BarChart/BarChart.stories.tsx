import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Grid from 'components/Grid';

import BarChart from './BarChart';

export default {
  title: 'Components/Chart/BarChart',
  component: BarChart,
  argTypes: {}
};

const itemsByStatuses = [
  {
    name: 'Работа 1',
    NEW: 44,
    IN_PROGRESS: 12,
    IN_REVIEW: 53,
    FIXED: 53,
    NOT_FIXED: 53
  },
  {
    name: 'Работа 2',
    NEW: 55,
    IN_PROGRESS: 17,
    IN_REVIEW: 32,
    FIXED: 32,
    NOT_FIXED: 32
  },
  {
    name: 'Работа 3',
    NEW: 41,
    IN_PROGRESS: 11,
    IN_REVIEW: 33,
    FIXED: 33,
    NOT_FIXED: 33
  },
  {
    name: 'Работа 4',
    NEW: 37,
    IN_PROGRESS: 9,
    IN_REVIEW: 52,
    FIXED: 52,
    NOT_FIXED: 52
  },
  {
    name: 'Работа 5',
    NEW: 22,
    IN_PROGRESS: 15,
    IN_REVIEW: 13,
    FIXED: 13,
    NOT_FIXED: 13
  }
];

const itemsByTypes = [
  {
    name: 'Объект 1',
    NORMAL: 44,
    CRITICAL: 12,
    RECOMMENDATION: 53
  },
  {
    name: 'Объект 2',
    NORMAL: 55,
    CRITICAL: 17,
    RECOMMENDATION: 32
  },
  {
    name: 'Объект 3',
    NORMAL: 41,
    CRITICAL: 11,
    RECOMMENDATION: 33
  },
  {
    name: 'Объект 4',
    NORMAL: 37,
    CRITICAL: 9,
    RECOMMENDATION: 52
  },
  {
    name: 'Объект 5',
    NORMAL: 22,
    CRITICAL: 15,
    RECOMMENDATION: 13
  }
];

export const ToStorybook = () => {
  const { t } = useTranslation();

  return (
    <Grid.Row gutter={[16, 20]}>
      <Grid.Col xs={24}>
        <BarChart
          title="Статистика по типам работ"
          description=""
          series={Object.keys(itemsByTypes[0])
            .filter(k => k !== 'name')
            .map(status => ({
              name: t(`enum_defect_type_${status}`),
              data: itemsByTypes.map(item => item[status])
            }))}
          categories={itemsByTypes.map(item => item.name)}
          colors={['#FF9500', '#5BC9FB', '#FF3B30']}
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <BarChart
          title="Статистика по статусам работ"
          description=""
          series={Object.keys(itemsByStatuses[0])
            .filter(k => k !== 'name')
            .map(status => ({
              name: t(`enum_defect_status_${status}`),
              data: itemsByStatuses.map(item => item[status])
            }))}
          categories={itemsByStatuses.map(item => item.name)}
          colors={['#D2D2D7', '#5BC9FB', '#FF9500', '#FF3B30', '#35C85A']}
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <BarChart
          title="Статистика по видам работ"
          description=""
          series={Object.keys(itemsByStatuses[0])
            .filter(k => k !== 'name')
            .map(status => ({
              name: t(`enum_defect_status_${status}`),
              data: itemsByStatuses.map(item => item[status])
            }))}
          categories={itemsByStatuses.map(item => item.name)}
          colors={['#D2D2D7', '#5BC9FB', '#FF9500', '#FF3B30', '#35C85A']}
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <BarChart
          title="Замечания по Генподрядчикам"
          description="Статистика по по Генподрядчикам"
          series={Object.keys(itemsByStatuses[0])
            .filter(k => k !== 'name')
            .map(status => ({
              status,
              data: itemsByStatuses.map(item => item[status])
            }))}
          categories={itemsByStatuses.map(item => item.name)}
          colors={['#D2D2D7', '#5BC9FB', '#FF9500', '#FF3B30', '#35C85A']}
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <BarChart
          title="Замечания по Субподрядчикам"
          description="Статистика по Субподрядчикам"
          series={Object.keys(itemsByStatuses[0])
            .filter(k => k !== 'name')
            .map(status => ({
              status,
              data: itemsByStatuses.map(item => item[status])
            }))}
          categories={itemsByStatuses.map(item => item.name)}
          colors={['#D2D2D7', '#5BC9FB', '#FF9500', '#FF3B30', '#35C85A']}
        />
      </Grid.Col>

      <Grid.Col xs={24}>
        <BarChart
          title="Замечания по Прорабам"
          description="Статистика по Прорабам"
          series={Object.keys(itemsByStatuses[0])
            .filter(k => k !== 'name')
            .map(status => ({
              status,
              data: itemsByStatuses.map(item => item[status])
            }))}
          categories={itemsByStatuses.map(item => item.name)}
          colors={['#D2D2D7', '#5BC9FB', '#FF9500', '#FF3B30', '#35C85A']}
        />
      </Grid.Col>
    </Grid.Row>
  );
};

ToStorybook.story = {
  name: 'BarChart'
};
