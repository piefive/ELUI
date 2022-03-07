import { ChangeEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';

import type { ICheckbox, TCheckboxChecked } from './types';
import { Checkbox } from './Checkbox';

export default {
  title: 'ui/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      options: [true, false, 'indeterminate'],
      control: { type: 'radio' },
    },
    validate: {
      options: [true, false, null],
      control: { type: 'radio' },
    },
  },
  args: {
    variant: 'primary',
    label: 'Checkbox label',
    description: 'Description',
    checked: false,
    disabled: false,
    message: 'Description',
    validateMessage: 'This is an validate message',
  },
};

export const Default = (args: ICheckbox) => {
  const [checked, setChecked] = useState<TCheckboxChecked>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    setChecked(event.target.checked);
    args?.onChange(event);
  };

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <StyledBox>
      <Checkbox {...args} checked={checked} onChange={handleChange} />
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
