import styled from 'styled-components';
import { useState } from 'react';

import { reverseArrayValue, toString } from 'lib';

import type { ISelect } from './types';
import { SELECT_CN } from './constants';
import { Select } from './Select';

export default {
  title: 'ui/_unstable_Select',
  component: Select,
  argTypes: {
    validate: { options: [true, false, null], control: { type: 'radio' } },
  },
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    message: 'This is the description area',
    validateMessage: 'This is an validate message',
  },
};

export const Default = (args: ISelect) => {
  const [value, setValue] = useState<string>('1');

  return (
    <StyledBox>
      <Select<string> {...args} onChange={value => setValue(value)} onClear={() => setValue('')} activeValue={value}>
        {Array.from({ length: 4 }, (_, i) => (
          <Select.Option key={i} value={toString(i)}>
            Item {i + 1}
          </Select.Option>
        ))}
      </Select>
    </StyledBox>
  );
};

export const Multiple = (args: ISelect) => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <StyledBox>
      <Select<string>
        {...args}
        onChange={value => setValues(reverseArrayValue(values, value))}
        activeValue={values}
        onClear={value => setValues(value ? reverseArrayValue(values, value) : [])}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <Select.Option key={i} value={toString(i)}>
            Item {i + 1}
          </Select.Option>
        ))}
      </Select>
    </StyledBox>
  );
};
Multiple.args = {
  multiple: true,
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

  .${SELECT_CN} {
    max-width: 500px;
  }
`;
