/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentType, useState, useMemo, useEffect } from 'react';
import { LoadingPlaceholder, ErrorPlaceholder } from './unsuccessfulFetchPlaceholders';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getDisplayName = ({ displayName, name }: ComponentType<any>) =>
  displayName || name || 'Component';

type Loading = { status: 'loading'; result: null };
type Failure = { status: 'failure'; result: Error };
type Success<T> = { status: 'success'; result: T };

type Data<T> = Loading | Failure | Success<T>;

export interface WithFetchedDataProps<T> {
  data?: T;
  setData?: (data: T) => void;
}

function withFetchedData<D, P extends WithFetchedDataProps<D>>(
  Component: ComponentType<P>,
  url: string,
  options?: RequestInit
): React.FC<P> {
  return Object.assign(
    (props: P) => {
      const [state, setState] = useState<Data<D>>({ status: 'loading', result: null });
      const controller = useMemo(() => new AbortController(), []);

      useEffect(() => {
        fetch(url, { ...options, signal: controller.signal })
          .then((res) => {
            if (res.ok) return res.json();
            throw new Error(res.statusText);
          })
          .then((data: D) => setState({ status: 'success', result: data }))
          .catch((error: Error) => setState({ status: 'failure', result: error }));

        return () => controller.abort();
      }, [controller]);

      if (state.status === 'loading') return <LoadingPlaceholder />;

      if (state.status === 'failure') return <ErrorPlaceholder text={state.result.message} />;

      return (
        <Component
          data={state.result}
          setData={(data: D) => setState({ status: 'success', result: data })}
          {...props}
        />
      );
    },
    { displayName: `WithFetchedData(${getDisplayName(Component)})` }
  );
}

export { withFetchedData };
