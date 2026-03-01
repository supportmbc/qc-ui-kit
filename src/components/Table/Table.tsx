import React from 'react';
import TableBase, { TableProps } from 'antd/lib/table';
import cx from 'classnames';

import * as Content from './Content';

import './Table.scss';
import cls from './Table.module.scss';

export type IProps<T extends object> = Omit<TableProps<T>, 'pagination' | 'showSorterTooltip'>;

interface IComponent {
  <T extends object>(props: IProps<T>): React.ReactElement;
  Content: typeof Content;
}

const Table: IComponent = <T extends object>({ className, ...props }: IProps<T>) => (
  <div className={cx(cls.wrapper, className)}>
    <TableBase<T> className={cls.table} {...props} pagination={false} showSorterTooltip={false} />
  </div>
);

Table.Content = Content;

export default Table;
