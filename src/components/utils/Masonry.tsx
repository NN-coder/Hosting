import React, { ReactNode, useMemo } from 'react';
import shortid from 'shortid';
import styled from 'styled-components/macro';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: inherit;
`;

const getIndent = (gap: number | string) => (typeof gap === 'number' ? `${gap}px` : gap);

const getColumns = (columnsCount: number, children: ReactNode) => {
  const columns = Array.from({ length: columnsCount }, (): ReactNode[] => []);
  const childrenArray = React.Children.toArray(children);

  childrenArray.forEach((child, index) => columns[index % columnsCount].push(child));

  return columns;
};

export interface Props {
  columnsCount: number;
  columnGap?: number | string;
  rowGap?: number | string;
  className?: string;
}

const Masonry: React.FC<Props> = ({
  className,
  children,
  columnsCount,
  columnGap = '0',
  rowGap = '0',
}) => {
  const style = useMemo(
    (): React.CSSProperties => ({
      display: 'grid',
      gridTemplateColumns: `repeat(${columnsCount}, 1fr)`,
      gap: `${getIndent(rowGap)} ${getIndent(columnGap)}`,
    }),
    [columnsCount, columnGap, rowGap]
  );

  const columnKeys = useMemo(() => Array.from({ length: columnsCount }, () => shortid.generate()), [
    columnsCount,
  ]);

  return (
    <div className={className} style={style}>
      {getColumns(columnsCount, children).map((column, index) => (
        <Column key={columnKeys[index]}>{column}</Column>
      ))}
    </div>
  );
};

export { Masonry };
