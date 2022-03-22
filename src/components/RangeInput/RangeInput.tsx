import { forwardRef } from 'react';

import { bindAria, combineClassNames, useForkForwardedRef } from 'lib';
import { FieldBox } from 'internal';

import type { IRangeInput } from './types';
import { RANGE_INPUT_CN } from './constants';
import { useRatio } from './hooks';
import { RangeSlider } from './units';
import { StyledInput, StyledRail, StyledTrack } from './styled';

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
    const ratio = useRatio(min, max, Number(value));

    return (
      <FieldBox
        className={combineClassNames(className, RANGE_INPUT_CN)}
        {...{ label, isRequired, validate, validateMessage, message, boxStyle }}
      >
        <StyledRail>
          <StyledTrack style={{ width: `${ratio * 100}%` }}>
            <RangeSlider />
          </StyledTrack>
        </StyledRail>
        <StyledInput
          ref={setRef}
          {...{ value }}
          {...bindAria({ valuemin: min, valuemax: max, valuenow: Number(value) || min })}
          {...rest}
        />
      </FieldBox>
    );
  }
);

RangeInput.displayName = 'RangeInput';
