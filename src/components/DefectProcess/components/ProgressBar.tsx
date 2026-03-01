import React, { useEffect, useRef } from 'react';
import cx from 'classnames';

import cls from './ProgressBar.module.scss';

interface IProps {
  width: string;
  color?: string;
  animate?: boolean;
  stripes?: boolean;
}

const ProgressBar: React.FC<IProps> = ({ width, color = 'default', animate = false, stripes = true }) => {
  const spanRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current! as HTMLSpanElement;

    if (el) {
      const targetWidth = width;

      el.style.width = '0';
      setTimeout(() => {
        el.style.transition = 'width 1.2s ease-in-out';
        el.style.width = targetWidth;
      }, 100);
    }
  }, [width]);

  return (
    <div className={cx(cls.meter, color && cls[color], !stripes && cls.nostripes, animate && cls.animate)}>
      <span ref={spanRef}>{animate && <span />}</span>
    </div>
  );
};

export default ProgressBar;
