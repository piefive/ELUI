import { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';

import type { IRadioGroupComponent } from './types';
import { RadioGroup } from './RadioGroup';

export default {
  title: 'ui/Radio',
  component: RadioGroup,
  argTypes: {
    validate: {
      options: [true, false, null],
      control: { type: 'radio' },
    },
    checkedValues: { control: { type: null } },
  },
  args: {
    label: 'Label',
    isRequired: true,
    disabled: false,
    validate: null,
    message: 'This is the description area',
    validateMessage: 'This is an validate message',
  },
};

export const Group = (args: IRadioGroupComponent) => {
  const [value, setValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.target.value);
    args?.onChange?.(event);
  };

  return (
    <StyledBox>
      <RadioGroup {...args} activeValue={value} onChange={handleChange}>
        {Array.from({ length: 5 }, (_, i) => (
          <RadioGroup.Radio key={i} label={`Radio ${i + 1}`} value={i} message="Description" />
        ))}
      </RadioGroup>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
