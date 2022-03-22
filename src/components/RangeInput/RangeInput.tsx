import { forwardRef } from 'react';

import { combineClassNames } from 'lib';
import { FieldBox } from 'internal';

import type { IRangeInput } from './types';
import { RANGE_INPUT_CN } from './constants';
import { useRatio } from './hooks';
import { RangeSlider } from './units';
import { StyledInput, StyledRail, StyledSliderSlider } from './styled';

export const RangeInput = forwardRef<HTMLInputElement, IRangeInput>(
  (
    { className, validate = null, validateMessage, message, label, isRequired, boxStyle, min = 0, max = 100, ...rest },
    rangeInputRef
  ) => {
    const ratio = useRatio(min, max, rest.value);

    return (
      <FieldBox
        className={combineClassNames(className, RANGE_INPUT_CN)}
        {...{ label, isRequired, validate, validateMessage, message, boxStyle }}
      >
        <StyledRail>
          <StyledSliderSlider style={{ width: `${ratio * 100}%` }}>
            <RangeSlider />
          </StyledSliderSlider>
        </StyledRail>
        <StyledInput ref={rangeInputRef} {...rest} />
      </FieldBox>
    );
  }
);

RangeInput.displayName = 'RangeInput';
