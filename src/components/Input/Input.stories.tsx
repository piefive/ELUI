import { ChangeEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Icon } from 'components/Icon';

import { Input } from './Input';
import type { IInput } from './types';

export default {
  title: 'ui/Input/Base',
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
    value: '+7(431)232-11-11',
    isRequired: true,
    isFocused: false,
    disabled: false,
    validate: null,
    placeholder: 'Placeholder',
    message: 'This is the description area',
    validateMessage: 'This is an validate message',
  },
};

export const Default = (args: IInput) => {
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
      <Input
        {...args}
        leftSlot={<Icon.Search />}
        rightSlot={<Icon.Mail />}
        value={value}
        onChange={handleChange}
        maskOptions={{ mask: '+{7}(000)000-00-00', lazy: false }}
      />
    </StyledBox>
  );
};
Default.argTypes = {
  maskOptions: { control: { type: null } },
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
