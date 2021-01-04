import React, { ReactNode, useMemo } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';

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
  children: ReactNode;
  columnsCount: number;
  columnGap: number | string;
  rowGap: number | string;
  className?: string;
}

const Masonry: React.FC<Props> = ({
  className,
  children,
  columnsCount,
  columnGap = '0',
  rowGap = '0',
}) => {
  const columnIndent = useMemo(() => getIndent(columnGap), [columnGap]);
  const rowIndent = useMemo(() => getIndent(rowGap), [rowGap]);

  const style = useMemo(
    (): React.CSSProperties => ({
      display: 'grid',
      gridTemplateColumns: `repeat(${columnsCount}, 1fr)`,
      columnGap: columnIndent,
      rowGap: rowIndent,
    }),
    [columnsCount, columnIndent, rowIndent]
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

export default Masonry;
