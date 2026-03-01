import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import cls from './PieChart.module.scss';

interface IChart {
  series?: ApexOptions['series'];
  options?: ApexOptions;
}

export interface IProps {
  title: string;
  description?: string;
  series: number[];
  labels: string[];
  colors: string[];
  height?: number;
  size?: string;
  show?: boolean;
}

const PieChart: React.FC<IProps> = ({
  title,
  description,
  series,
  labels,
  colors,
  height = 200,
  size = '70%',
  show = true
}) => {
  const { t } = useTranslation();
  const [state] = useState<IChart>({
    series,
    options: {
      chart: {
        type: 'donut',
        fontFamily: 'Inter, sans-serif'
      },
      dataLabels: {
        enabled: false
      },
      labels,
      colors,
      legend: {
        formatter: function (seriesName: string, opts: any) {
          const value = opts.w.globals.series[opts.seriesIndex];
          return `
            <span class="apexcharts-legend-text-name">${seriesName}</span>
            <span class="apexcharts-legend-text-value">${value}</span>
          `;
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size,
            labels: {
              show,
              total: {
                label: t('total'),
                showAlways: true,
                show: true,
                fontWeight: 500,
                fontSize: '16px',
                color: '#737373'
              },
              value: {
                fontWeight: 600,
                fontSize: '36px',
                color: '#0A0A0A'
              }
            }
          }
        }
      }
    }
  });

  return (
    <div className={cls.wrapper}>
      <div className={cls.info}>
        <div className={cls.title}>{title}</div>
        {!!description && <div className={cls.description}>{description}</div>}
      </div>
      <ReactApexChart options={state.options} series={state.series} type="donut" width="100%" height={height} />
    </div>
  );
};

export default PieChart;
