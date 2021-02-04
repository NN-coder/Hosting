/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useMemo, ReactNode } from 'react';
import { IconContext } from 'react-icons';

export interface Props {
  viewBox: string;
  children: ReactNode;
  size?: number | string;
  color?: string;
  className?: string;
}

const Icon: React.FC<Props> = ({
  viewBox,
  color: propsColor,
  size: propsSize,
  children,
  className,
}) => {
  const { size: contextSize, color: contextColor, attr, style } = useContext(IconContext);

  const size = useMemo(() => propsSize ?? contextSize ?? '1em', [propsSize, contextSize]);
  const color = useMemo(() => propsColor ?? contextColor ?? 'inherit', [propsColor, contextColor]);

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
      xmlns="http://www.w3.org/2000/svg"
      {...attr}
    >
      {children}
    </svg>
  );
};

export { Icon };
