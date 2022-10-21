import { forwardRef } from 'react';

import { bindAria, bindSemantics, combineClassNames, isString } from 'lib';

import type { IButton } from './types';
import { BUTTON_CN } from './constants';
import { useButtonActive } from './hooks';
import { StyledButton, StyledLeftSlot, StyledRightSlot, StyledTypography } from './styled';

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      type = 'button',
      children,
      disabled = false,
      className,
      variant = 'primary',
      semantics,
      leftSlot,
      rightSlot,
      onKeyUp,
      onKeyDown,
      ...rest
    },
    ref
  ) => {
    const { isButtonPressed, ...pressActions } = useButtonActive({ onKeyUp, onKeyDown });

    return (
      <StyledButton
        className={combineClassNames(className, BUTTON_CN)}
        tabIndex={!disabled ? 0 : -1}
        {...pressActions}
        {...bindAria({ disabled, pressed: isButtonPressed })}
        {...bindSemantics(semantics)}
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

Button.displayName = 'Button';
