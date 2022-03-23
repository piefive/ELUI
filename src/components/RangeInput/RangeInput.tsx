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
      max = 100,
      value,
      ...rest
    },
    rangeInputRef
  ) => {
    const [setRef, innerRef] = useForkForwardedRef(rangeInputRef);
    const trackRef = useRef<HTMLDivElement>(null);
    const thumbRef = useRef<HTMLDivElement>(null);

    const validValue = Number(value) || min;

    const handlers = useRangeHandlers({ innerRef, trackRef, thumbRef, min, max, value: validValue });
    const ratio = useRatio(min, max, validValue);

    const bindThumb = useDrag(({ xy: [x], down }) => down && handlers.handleChangeTrack(x), { axis: 'x' });

    return (
      <FieldBox
        className={combineClassNames(className, RANGE_INPUT_CN)}
        {...{ label, isRequired, validate, validateMessage, message, boxStyle }}
      >
        <StyledRail onClick={handlers.handleClickRail}>
          <StyledTrack ref={trackRef} style={{ width: `${ratio * 100}%` }}>
            <StyledThumbBox onClick={preventedEventFn}>
              <Icon.ChevronLeft
                onClick={handlers.handleDecrement}
                iconStyle={({ theme }) => ({ color: theme.palette.white })}
              />
              <StyledThumb ref={thumbRef} {...bindThumb()}>
                <Typography color="inherit">{value}</Typography>
              </StyledThumb>
              <Icon.ChevronRight onClick={handlers.handleIncrement} />
            </StyledThumbBox>
          </StyledTrack>
        </StyledRail>
        <StyledInput
          ref={setRef}
          {...{ value }}
          {...bindAria({ valuemin: min, valuemax: max, valuenow: validValue })}
          {...rest}
        />
      </FieldBox>
    );
  }
);

RangeInput.displayName = 'RangeInput';
