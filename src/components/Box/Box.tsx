import React from 'react';

type TPadding = number | number[];

interface IProps {
  height?: number | string;
  padding?: TPadding;
  borderRadius?: number;
  children: React.ReactNode;
}

const Box: React.FC<IProps> = ({ height = '100%', padding = 20, borderRadius = 12, children }) => {
  const resolvePadding = (padding: TPadding) => {
    if (Array.isArray(padding)) {
      return padding.map(p => `${p}px`).join(' ');
    }
    return `${padding}px`;
  };

  return (
    <div style={{ height, padding: resolvePadding(padding), backgroundColor: 'var(--color-white)', borderRadius }}>
      {children}
    </div>
  );
};

export default Box;
