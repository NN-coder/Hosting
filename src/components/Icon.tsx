import React, { useContext } from 'react';
import { IconContext } from 'react-icons';

export interface Props {
  children: React.ReactNode;
  viewBox: string;
  className?: string;
}

const Icon: React.FC<Props> = ({ children, viewBox, className }) => {
  const { size = '1em', color = 'inherit', attr, style } = useContext(IconContext);

  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox={viewBox}
      height={size}
      width={size}
      color={color}
      style={style}
      aria-hidden={!!attr?.['aria-hidden']}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default Icon;
