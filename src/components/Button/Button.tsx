import React, { forwardRef } from 'react';

import { combineClassNames, isString } from 'lib';

import type { IButton } from './types';
import { StyledButton, StyledLeftSlot, StyledRightSlot, StyledTypography } from './styled';
import { useButtonActive } from './hooks';
import { BUTTON_CN } from './constants';

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      type = 'button',
      children,
      disabled = false,
      className,
      variant = 'primary',
      leftSlot,
      rightSlot,
      onKeyUp,
      onKeyDown,
      ...rest
    },
    ref
  ) => {
    const { isButtonPressed, ...pressActions } = useButtonActive({
      onKeyUp,
      onKeyDown,
    });

    return (
      <StyledButton
        className={combineClassNames(className, BUTTON_CN)}
        tabIndex={!disabled ? 0 : -1}
        data-button-enter-pressed={isButtonPressed}
        {...pressActions}
        {...{ ...rest, type, ref, variant, disabled }}
      >
        {leftSlot && <StyledLeftSlot>{leftSlot}</StyledLeftSlot>}
        {isString(children) ? (
          <StyledTypography variant="st1" isSlotsEmpty={!(leftSlot || rightSlot)}>
            {children}
          </StyledTypography>
        ) : (
          children
        )}
        {rightSlot && <StyledRightSlot>{rightSlot}</StyledRightSlot>}
      </StyledButton>
    );
  }
);
