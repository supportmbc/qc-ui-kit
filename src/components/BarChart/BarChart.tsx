import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import cls from './BarChart.module.scss';

interface IChart {
  series?: ApexOptions['series'];
  options?: ApexOptions;
}

export interface IProps {
  title: string;
  description?: string;
  series: ApexOptions['series'];
  categories: string[];
  colors?: string[];
}

const BarChart: React.FC<IProps> = ({ title, description, series, categories, colors }) => {
  const [state] = useState<IChart>({
    series,
    options: {
      chart: {
        type: 'bar',
        stacked: true,
        fontFamily: 'Inter, sans-serif',
        toolbar: {
          show: false
        }
      },
      colors,
      plotOptions: {
        bar: {
          barHeight: 24,
          horizontal: true,
          borderRadius: 4,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: '13px',
                fontWeight: 700
              }
            }
          }
        }
      },
      stroke: {
        show: false
      },
      xaxis: {
        categories
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'center',
        offsetX: 40,
        formatter: function (seriesName: string, opts: any) {
          const seriesArray = opts.w.globals.series[opts.seriesIndex];
          const total = seriesArray.reduce((a: number, b: number) => a + b, 0);

          return `
            <span class="apexcharts-legend-text-name">${seriesName}</span>
            <strong class="apexcharts-legend-text-value">${total}</strong>
          `;
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
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        width="100%"
        height={categories.length * 32 + 80}
      />
    </div>
  );
};

export default BarChart;
