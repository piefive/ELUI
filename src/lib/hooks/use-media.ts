import { useEffect, useState } from 'react';

import { createListener, isClient } from 'lib/utils';

import { useMountedState } from './use-mounted-state';

export const useMedia = (query: string, defaultState = false) => {
  const isMounted = useMountedState();
  const [isMatched, setMatched] = useState(isClient() ? () => window.matchMedia(query).matches : defaultState);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handleChange = () => isMounted() && setMatched(mql.matches);

    mql.addListener(handleChange);

    setMatched(mql.matches);

    return () => {
      mql.removeListener(handleChange);
    };
  }, [isMounted, query]);

  return isMatched;
};
