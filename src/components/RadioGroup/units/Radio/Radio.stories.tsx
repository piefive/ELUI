import { ChangeEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';

import type { IRadio } from '../../types';

import { Radio } from './Radio';

export default {
  title: 'ui/Radio',
  component: Radio,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    validate: {
      options: [true, false, null],
      control: { type: 'radio' },
    },
  },
  args: {
    variant: 'primary',
    label: 'Checkbox label',
    checked: false,
    disabled: false,
    message: 'Description',
    validateMessage: 'This is an validate message',
  },
};

export const Default = (args: IRadio) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    setChecked(event.target.checked);
    args?.onChange(event);
  };

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <StyledBox>
      <Radio {...args} checked={checked} onChange={handleChange} />
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
