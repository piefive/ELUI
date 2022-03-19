import { ChangeEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useUpdateEffect } from 'lib/hooks';
import { Icon } from 'components/Icon';

import { Input } from './Input';
import type { IInputFieldWithMask, TInput } from './types';

export default {
  title: 'ui/Input',
  component: Input,
  argTypes: {
    value: { control: 'text' },
    leftSlot: { control: { type: null } },
    rightSlot: { control: { type: null } },
    validate: { options: [true, false, null], control: { type: 'radio' } },
  },
  args: {
    label: 'Label',
    type: 'text',
    value: '',
    isRequired: true,
    isFocused: false,
    disabled: false,
    validate: null,
    placeholder: 'Placeholder',
    message: 'This is the description area',
    validateMessage: 'This is an validate message',
  },
};

export const Base = (args: TInput) => {
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
      <Input {...args} leftSlot={<Icon.Search />} rightSlot={<Icon.Mail />} value={value} onChange={handleChange} />
    </StyledBox>
  );
};
Base.argTypes = {
  maskOptions: { control: { type: null } },
};

export const Password = (args: TInput) => {
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
      <Input {...args} value={value} onChange={handleChange} />
    </StyledBox>
  );
};
Password.argTypes = {
  type: { control: { type: null } },
  maskOptions: { control: { type: null } },
};
Password.args = {
  type: 'password',
};

export const Masked = (args: TInput) => {
  const [value, setValue] = useState<string | number>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    args?.onChange?.(event);
    setValue(event.target.value);
  };

  return (
    <StyledBox>
      <Input
        key={JSON.stringify((args as IInputFieldWithMask).maskOptions)}
        {...args}
        leftSlot={<Icon.Search />}
        rightSlot={<Icon.Mail />}
        value={value}
        onChange={handleChange}
      />
    </StyledBox>
  );
};
Masked.argTypes = {
  value: { control: { type: null } },
};
Masked.args = {
  maskOptions: { mask: '+{7}(000)000-00-00', lazy: false },
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
