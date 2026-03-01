import React from 'react';

import cls from './BimCard.module.scss';

interface IProps {
  src: string;
  name: string;
  onClick: () => void;
}

const BimCard: React.FC<IProps> = ({ src, name, onClick }) => (
  <div className={cls.wrapper} onClick={onClick}>
    <img className={cls.image} src={src} alt={name} />
    <div className={cls.name}>{name}</div>
  </div>
);

export default BimCard;
