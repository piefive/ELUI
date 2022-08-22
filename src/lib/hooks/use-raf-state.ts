import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

export const useRafState = <State = unknown>(
  initialState: State | (() => State)
): [State, Dispatch<SetStateAction<State>>] => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: State | ((prevState: State) => State)) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => setState(value));
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return [state, setRafState];
};
