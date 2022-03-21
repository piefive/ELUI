import { forwardRef } from 'react';

import { combineClassNames, isNaN } from 'lib';
import { FieldBox } from 'internal';

import type { IRangeInput } from './types';
import { RANGE_INPUT_CN } from './constants';
import { RangeSlider } from './units';
import { StyledInput, StyledRangeSliderBox, StyledSliderSlider } from './styled';

export const RangeInput = forwardRef<HTMLInputElement, IRangeInput>(
  (
    { className, validate = null, validateMessage, message, label, isRequired, boxStyle, min = 0, max = 100, ...rest },
    rangeInputRef
  ) => {
    const numberValue = Number(rest.value);
    const percent = isNaN(numberValue) ? 0 : ((numberValue - min) / (max - min)) * 100;

    return (
      <FieldBox
        className={combineClassNames(className, RANGE_INPUT_CN)}
        {...{ label, isRequired, validate, validateMessage, message, boxStyle }}
      >
        <StyledRangeSliderBox>
          <StyledSliderSlider style={{ width: `${percent}%` }}>
            <RangeSlider />
          </StyledSliderSlider>
        </StyledRangeSliderBox>
        <StyledInput ref={rangeInputRef} {...rest} />
      </FieldBox>
    );
  }
);

RangeInput.displayName = 'RangeInput';
