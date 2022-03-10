import { MouseEvent, forwardRef } from 'react';
import { animated, useSpring } from 'react-spring';

import { bindAria, combineClassNames, useFirstMountState } from 'lib';

import type { TSwitch } from './types';
import { SWITCH_CN, SWITCH_OFFSET, SWITCH_TOGGLE_CN, SWITCH_WIDTH, TOGGLE_WIDTH } from './constants';
import { StyledSwitch, StyledToggle } from './styled';

export const Switch = forwardRef<HTMLButtonElement, TSwitch>(
  (
    {
      className,
      checkedSlot,
      checked = false,
      isLoading = false,
      uncheckedSlot,
      onChange,
      disabled = false,
      boxStyle,
      toggleStyle,
    },
    switchRef
  ) => {
    const isFirstMount = useFirstMountState();

    const isDisabled = disabled || isLoading;

    const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) onChange(!checked, event);
    };

    const toggleAnimateStyle = useSpring({
      config: { tension: 210, friction: 18 },
      from: { x: checked ? SWITCH_WIDTH - SWITCH_OFFSET : 0 },
      to: { x: checked ? SWITCH_WIDTH - TOGGLE_WIDTH - SWITCH_OFFSET * 2 : 0 },
      delay: 50,
      immediate: isFirstMount,
    });

    return (
      <StyledSwitch
        ref={switchRef}
        type="button"
        role="switch"
        className={combineClassNames(className, SWITCH_CN)}
        tabIndex={isDisabled ? -1 : 0}
        onClick={handleChange}
        {...bindAria({ checked, disabled: isDisabled, busy: isLoading })}
        {...{ disabled, checked, isLoading, boxStyle }}
      >
        {uncheckedSlot}
        {checkedSlot}
        <animated.div style={toggleAnimateStyle}>
          <StyledToggle className={SWITCH_TOGGLE_CN} {...{ disabled, checked, toggleStyle }} />
        </animated.div>
      </StyledSwitch>
    );
  }
);

Switch.displayName = 'Switch';
