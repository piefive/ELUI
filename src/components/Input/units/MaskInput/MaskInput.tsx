import { MutableRefObject, memo, useCallback, useEffect, useRef, useState } from 'react';
import { useIMask } from 'react-imask';
import { equals } from 'ramda';

import { createListener, dispatchEvent, mergeRefs, useFirstMountState, useMount } from 'lib';

import { StyledInput } from '../../styled';

import type { IMaskInput } from './types';
import { StyledMaskInput } from './styled';

export const MaskInput = memo(
  ({ maskOptions, inputRef, onComplete, onBlur, onFocus, placeholder, ...rest }: IMaskInput) => {
    const isFirstMount = useFirstMountState();
    const ref = useRef<HTMLInputElement>();
    const [opts] = useState(maskOptions);
    const { value: inputValue, type } = rest;

    const updateInput = useCallback((value: string) => {
      dispatchEvent({ event: 'input', element: ref.current, property: 'value', args: value });
    }, []);

    const { ref: innerRef, maskRef } = useIMask(opts, {
      onAccept: !isFirstMount ? updateInput : undefined,
      onComplete,
    });

    useEffect(() => {
      maskRef.current.value = inputValue.toString();
      maskRef.current.updateValue();
    }, [inputValue, maskRef]);

    useMount(() => {
      const maskInput = innerRef.current as HTMLInputElement;
      const listener = createListener(ref.current, 'focus', () => maskInput?.focus());
      listener.on();
      return () => listener.off();
    });

    return (
      <>
        <StyledInput ref={innerRef as MutableRefObject<HTMLInputElement>} {...{ onBlur, onFocus, placeholder, type }} />
        <StyledMaskInput ref={mergeRefs(inputRef, ref)} tabIndex={-1} {...rest} />
      </>
    );
  },
  equals
);

MaskInput.displayName = 'MaskInput';
