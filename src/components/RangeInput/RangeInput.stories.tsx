import { ChangeEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';

import { RangeInput } from './RangeInput';
import type { IRangeInput } from './types';

export default {
  title: 'ui/RangeInput',
  component: RangeInput,
  argTypes: {
    value: { control: 'number' },
    validate: { options: [true, false, null], control: { type: 'radio' } },
  },
  args: {
    label: 'Label',
    value: 50,
    min: 0,
    max: 200,
    message: 'This is the description area',
    validateMessage: 'This is an validate message',
  },
};

export const Base = (args: IRangeInput) => {
  const { value: controlsValue } = args;
  const [value, setValue] = useState<string | number>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    args?.onChange?.(event);
    setValue(event.target.value);
  };

  useEffect(() => {
    setValue(controlsValue);
  }, [controlsValue]);

  return (
    <StyledBox>
      <RangeInput {...args} value={value} onChange={handleChange} />
    </StyledBox>
  );
};

const StyledBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
