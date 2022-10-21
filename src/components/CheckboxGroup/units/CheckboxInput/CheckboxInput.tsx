import { forwardRef, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

import { bindSemantics, useFirstMountState, useForkForwardedRef, usePrevious } from 'lib';

import type { ICheckboxInput } from '../../types';
import { CHECKBOX_INPUT_CN } from '../../constants';

import { StyledCheckIcon, StyledCheckbox, StyledCheckboxInput, StyledIndeterminate } from './styled';

export const CheckboxInput = forwardRef<HTMLInputElement, ICheckboxInput>(
  ({ checked, semantics, ...rest }, inputRef) => {
    const [setRef, forkedRef] = useForkForwardedRef<HTMLInputElement>(inputRef);
    const isFirstMount = useFirstMountState();
    const prevChecked = usePrevious(checked);

    const isChecked = Boolean(checked);
    const isIndeterminate = checked === 'indeterminate';

    const springStyle = useSpring({
      from: { opacity: 0, scale: 0 },
      to: { opacity: Number(isChecked), scale: Number(isChecked) },
      config: { mass: 1.5, tension: 310, friction: 15 },
      reset: () => isChecked && checked !== prevChecked,
      immediate: isFirstMount,
    });

    useEffect(() => {
      if (forkedRef.current) forkedRef.current.indeterminate = checked === 'indeterminate';
    }, [checked, forkedRef]);

    return (
      <StyledCheckboxInput className={CHECKBOX_INPUT_CN} {...bindSemantics(semantics)}>
        <animated.div style={{ position: 'relative', height: '100%', ...springStyle }}>
          {!isIndeterminate && isChecked && <StyledCheckIcon size={16} isChecked={!isIndeterminate && isChecked} />}
          {isIndeterminate && <StyledIndeterminate />}
        </animated.div>
        <StyledCheckbox ref={setRef} type="checkbox" checked={Boolean(checked)} {...rest} />
      </StyledCheckboxInput>
    );
  }
);

CheckboxInput.displayName = 'CheckboxInput';
