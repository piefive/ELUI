import { forwardRef } from 'react';
import type { Ref } from 'react';

import { ChipCheckedIcon } from 'components/Chip/units';
import { combineClassNames, createEventFn } from 'lib';
import { Typography } from 'components/Typography';
import { Icon } from 'components/Icon';

import type { IChipDefault, IChipInput, TChip, TChipForwardRef, TChipValue } from './types';
import { CHIP_CN } from './constants';
import { StyledChip, StyledChipContent, StyledDeleteButton } from './styled';

const PRESSED_KEYS = ['Enter', 'Space'];

const ChipComponent = <Value extends TChipValue = TChipValue>(
  { variant = 'input', className, leftSlot, children, value, onChip, ...props }: TChip<Value>,
  chipRef: Ref<HTMLDivElement>
) => {
  const { scheme = 'default' } = props as IChipDefault<Value>;
  const { checked: _checked, disabled, onDelete, withCheckedIcon } = props as IChipInput<Value>;

  const checked = Boolean(_checked);

  return (
    <StyledChip
      ref={chipRef}
      className={combineClassNames(className, CHIP_CN)}
      tabIndex={!disabled ? 0 : -1}
      onClick={!disabled && onChip ? () => onChip({ value, checked }) : undefined}
      onKeyUp={
        !disabled && onChip
          ? createEventFn(event => PRESSED_KEYS.includes(event.code) && onChip({ value, checked }))
          : undefined
      }
      {...{ disabled, checked, variant, scheme }}
    >
      <StyledChipContent>
        {withCheckedIcon && <ChipCheckedIcon {...{ checked }} />}
        <Typography variant="b1" color="inherit">
          {children}
        </Typography>
        {onDelete && (
          <StyledDeleteButton
            variant="custom"
            isWhite={checked}
            onClick={createEventFn(() => onDelete({ value, checked }), { isStopPropagation: true })}
          >
            <Icon.CrossSm />
          </StyledDeleteButton>
        )}
      </StyledChipContent>
    </StyledChip>
  );
};

export const Chip = forwardRef<HTMLDivElement, TChip>(ChipComponent) as TChipForwardRef;

Chip.displayName = 'Chip';
