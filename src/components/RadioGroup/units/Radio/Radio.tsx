import { forwardRef } from 'react';
import { animated, useSpring } from 'react-spring';
import { css } from 'styled-components';

import { combineClassNames, useFirstMountState, usePrevious } from 'lib';

import type { IRadio, IRadioInput } from '../../types';
import { RADIO_CN, RADIO_INPUT_CN } from '../../constants';
import { useRadioContext } from '../../hooks';

import { StyledRadio, StyledRadioBox, StyledRadioIcon, StyledRadioInput } from './styled';

export const Radio = forwardRef<HTMLInputElement, IRadio>(
  (
    {
      variant,
      label,
      className,
      validate,
      validateMessage,
      message,
      boxStyle,
      onChange,
      checked,
      disabled,
      name,
      ...rest
    },
    radioRef
  ) => {
    const isFirstMount = useFirstMountState();
    const ctx = useRadioContext();
    const { value } = rest;

    const isGroup = Boolean(ctx);
    const isChecked = Boolean(isGroup ? String(ctx.activeValue) === String(value) : checked);
    const prevChecked = usePrevious(checked);

    const springStyle = useSpring({
      from: { opacity: 0, scale: 0 },
      to: { opacity: Number(isChecked), scale: Number(isChecked) },
      config: { mass: 1.5, tension: 310, friction: 15 },
      reset: () => isChecked && checked !== prevChecked,
      immediate: isFirstMount,
    });

    const checkboxProps: Partial<IRadioInput> = {
      name: isGroup ? ctx.name : name,
      checked: isChecked,
      onChange: isGroup ? ctx.onChange : onChange,
      disabled: ctx?.disabled ?? disabled,
    };

    return (
      <StyledRadioBox
        boxClassName={combineClassNames(className, RADIO_CN)}
        variant={ctx?.variant ?? variant}
        isDisabled={Boolean(checkboxProps.disabled)}
        validate={!isGroup ? validate : null}
        validateMessage={!isGroup ? validateMessage : null}
        boxStyle={css`
          ${isGroup &&
          css`
            padding-bottom: 16px;

            &:last-of-type {
              padding-bottom: 0;
            }
          `}

          ${boxStyle};
        `}
        {...{ label, message, isChecked }}
      >
        <StyledRadio className={RADIO_INPUT_CN}>
          <animated.div style={{ position: 'relative', height: '100%', ...springStyle }}>
            <StyledRadioIcon />
          </animated.div>
          <StyledRadioInput {...rest} {...checkboxProps} ref={radioRef} type="radio" checked={isChecked} />
        </StyledRadio>
      </StyledRadioBox>
    );
  }
);

Radio.displayName = 'Radio';
