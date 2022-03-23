import { forwardRef } from 'react';
import { useDrag } from '@use-gesture/react';

import { Icon } from 'components/Icon';
import { Typography } from 'components/Typography';
import { bindAria, combineClassNames, useForkForwardedRef } from 'lib';
import { FieldBox } from 'internal';

import type { IRangeInput } from './types';
import { RANGE_INPUT_CN } from './constants';
import { useRangeInput, useRatio } from './hooks';
import { StyledInput, StyledRail, StyledThumb, StyledThumbBox, StyledTrack } from './styled';

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
    const { handleChangeTrack, handleClickRail, trackRef, thumbRef } = useRangeInput({ innerRef, min, max });

    const validValue = Number(value) || min;
    const ratio = useRatio(min, max, validValue);

    const bindThumb = useDrag(({ xy: [x] }) => handleChangeTrack(x), { enabled: true });

    return (
      <FieldBox
        className={combineClassNames(className, RANGE_INPUT_CN)}
        {...{ label, isRequired, validate, validateMessage, message, boxStyle }}
      >
        <StyledRail onClick={handleClickRail}>
          <StyledTrack ref={trackRef} style={{ width: `${ratio * 100}%` }}>
            <StyledThumbBox>
              <Icon.ChevronLeft iconStyle={({ theme }) => ({ color: theme.palette.white })} />
              <StyledThumb ref={thumbRef} {...bindThumb()}>
                <Typography color="inherit">{value}</Typography>
              </StyledThumb>
              <Icon.ChevronRight />
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
