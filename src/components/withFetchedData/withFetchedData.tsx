/* eslint-disable react/jsx-props-no-spreading */
import React, { ComponentType, useState, useMemo, useEffect } from 'react';
import { LoadingPlaceholder, ErrorPlaceholder } from './unsuccessfulFetchPlaceholders';

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
  return (props: P) => {
    const [state, setState] = useState<Data<D>>({ status: 'loading', result: null });
    const { signal, abort } = useMemo(() => new AbortController(), []);

    useEffect(() => {
      fetch(url, { ...options, signal })
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error(res.statusText);
        })
        .then((data: D) => setState({ status: 'success', result: data }))
        .catch((error: Error) => setState({ status: 'failure', result: error }));

      return abort;
    }, [signal, abort]);

    if (state.status === 'loading') return <LoadingPlaceholder />;

    if (state.status === 'failure') return <ErrorPlaceholder text={state.result.message} />;

    return (
      <Component
        data={state.result}
        setData={(data: D) => setState({ status: 'success', result: data })}
        {...props}
      />
    );
  };
}

export { withFetchedData };
