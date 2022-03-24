import { forwardRef, useRef } from 'react';
import { useDrag } from '@use-gesture/react';

import { Icon } from 'components/Icon';
import { Typography } from 'components/Typography';
import { bindAria, combineClassNames, createEventFn, noop, useForkForwardedRef } from 'lib';
import { FieldBox } from 'internal';

import type { IRangeInput } from './types';
import { RANGE_INPUT_CN } from './constants';
import { useRangeHandlers, useRatio } from './hooks';
import { StyledInput, StyledRail, StyledThumb, StyledThumbBox, StyledTrack } from './styled';

const preventedEventFn = createEventFn(noop, { isStopPropagation: true });

export const RangeInput = forwardRef<HTMLInputElement, IRangeInput>(
  (
    {
      className,
      validate = null,
      validateMessage,
      message,
      label,
      isRequired,
      boxStyle,
      min = 0,
      max = 99,
      value,
      disabled = false,
      ...rest
    },
    rangeInputRef
  ) => {
    const [setRef, innerRef] = useForkForwardedRef(rangeInputRef);
    const railRef = useRef<HTMLDivElement>(null);

    const validValue = Number(value) || min;

    const handlers = useRangeHandlers({ innerRef, railRef, min, max, value: validValue });
    const ratio = useRatio(min, max, validValue);

    const bindThumb = useDrag(({ xy: [x], down }) => down && !disabled && handlers.handleChangeTrack(x), { axis: 'x' });

    return (
      <FieldBox
        className={combineClassNames(className, RANGE_INPUT_CN)}
        {...{ label, isRequired, validate, validateMessage, message, boxStyle }}
      >
        <StyledRail
          ref={railRef}
          tabIndex={0}
          onClick={!disabled ? handlers.handleClickRail : undefined}
          onKeyDown={!disabled ? handlers.handleKeyDown : undefined}
          {...bindAria({ disabled })}
        >
          <StyledTrack style={{ width: `${ratio * 100}%` }}>
            <StyledThumbBox onClick={preventedEventFn}>
              <Icon.ChevronLeft
                onClick={!disabled ? handlers.handleDecrement : undefined}
                iconStyle={({ theme }) => ({ color: theme.palette.white })}
              />
              <StyledThumb {...bindThumb()}>
                <Typography color="inherit" typographyStyle={{ userSelect: 'none' }}>
                  {validValue}
                </Typography>
              </StyledThumb>
              <Icon.ChevronRight onClick={!disabled ? handlers.handleIncrement : undefined} />
            </StyledThumbBox>
          </StyledTrack>
        </StyledRail>
        <StyledInput
          ref={setRef}
          {...{ value, disabled }}
          {...bindAria({ valuemin: min, valuemax: max, valuenow: validValue, disabled })}
          {...rest}
        />
      </FieldBox>
    );
  }
);

RangeInput.displayName = 'RangeInput';
