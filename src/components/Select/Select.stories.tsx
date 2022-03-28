import styled from 'styled-components';

import { Select } from './Select';
import type { ISelect } from './types';

export default {
  title: 'ui/_unstable_Select',
  component: Select,
  argTypes: {
    validate: { options: [true, false, null], control: { type: 'radio' } },
  },
  args: {
    label: 'Label',
    message: 'This is the description area',
    validateMessage: 'This is an validate message',
  },
};

export const Default = (args: ISelect) => {
  return (
    <StyledBox>
      <Select {...args} activeValue={1}>
        <Select.Option>13</Select.Option>
        <Select.Option>13</Select.Option>
        <Select.Option>13</Select.Option>
        <Select.Option>13</Select.Option>
        <Select.Option>13</Select.Option>
      </Select>
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
