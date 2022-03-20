import { forwardRef } from 'react';

import { combineClassNames } from 'lib';
import { FieldBox } from 'internal';

import type { IRangeInput } from './types';
import { RANGE_INPUT_CN } from './constants';

export const RangeInput = forwardRef<HTMLInputElement, IRangeInput>(
  ({ className, validate = null, validateMessage, message, label, isRequired, boxStyle }, rangeInputRef) => {
    return (
      <FieldBox
        className={combineClassNames(className, RANGE_INPUT_CN)}
        {...{ label, isRequired, validate, validateMessage, message, boxStyle }}
      >
        stub
      </FieldBox>
    );
  }
);

RangeInput.displayName = 'RangeInput';
