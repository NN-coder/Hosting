/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useMemo } from 'react';
import { IconContext } from 'react-icons';

export interface Props extends React.SVGAttributes<SVGElement> {
  viewBox: string;
  size?: number | string;
}

const Icon: React.FC<Props> = ({
  viewBox,
  color: propsColor,
  size: propsSize,
  children,
  className,
  ...propsAttr
}) => {
  const { size: contextSize, color: contextColor, attr: contextAttr, style } = useContext(
    IconContext
  );

  const size = useMemo(() => propsSize ?? contextSize ?? '1em', [propsSize, contextSize]);
  const color = useMemo(() => propsColor ?? contextColor ?? 'inherit', [propsColor, contextColor]);
  const attr = useMemo(() => ({ ...contextAttr, ...propsAttr }), [propsAttr, contextAttr]);

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
