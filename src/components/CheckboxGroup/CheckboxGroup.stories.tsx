import { includes } from 'ramda';
import { ChangeEventHandler, useState } from 'react';
import styled from 'styled-components';

import type { ICheckboxGroupComponent } from './types';
import { CheckboxGroup } from './CheckboxGroup';

export default {
  title: 'ui/Checkbox',
  component: CheckboxGroup,
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

export const Group = (args: ICheckboxGroupComponent) => {
  const [values, setValues] = useState([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    const value = event.target.value;

    setValues(old => (includes(value, old) ? old.filter(val => val !== value) : [...values, value]));
    args?.onChange?.(event);
  };

  return (
    <StyledBox>
      <CheckboxGroup {...args} checkedValues={values} onChange={handleChange}>
        {Array.from({ length: 5 }, (_, i) => (
          <CheckboxGroup.Checkbox key={i} label={`Checkbox ${i + 1}`} value={i} message="Description" />
        ))}
      </CheckboxGroup>
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
