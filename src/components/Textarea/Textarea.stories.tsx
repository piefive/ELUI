import { ChangeEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Icon } from 'components/Icon';

import { Textarea } from './Textarea';
import type { ITextarea } from './types';

export default {
  title: 'ui/Textarea',
  component: Textarea,
  argTypes: {
    value: {
      control: 'text',
    },
    leftSlot: {
      control: { type: null },
    },
    rightSlot: {
      control: { type: null },
    },
    validate: {
      options: [true, false, null],
      control: { type: 'radio' },
    },
  },
  args: {
    label: 'Label',
    type: 'text',
    value: '',
    isRequired: true,
    isClearable: true,
    isResizable: false,
    isAutoHeight: true,
    disabled: false,
    validate: null,
    placeholder: 'Placeholder',
    message: 'This is the description area',
    validateMessage: 'This is an validate message',
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

export const Default = (args: ITextarea) => {
  const { value: controlsValue } = args;
  const [value, setValue] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
    args.onChange(event);
    setValue(event.target.value);
  };

  useEffect(() => {
    setValue(controlsValue);
  }, [controlsValue]);

  return (
    <StyledBox>
      <Textarea {...args} leftSlot={<Icon.Search />} rightSlot={<Icon.Mail />} value={value} onChange={handleChange} />
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
