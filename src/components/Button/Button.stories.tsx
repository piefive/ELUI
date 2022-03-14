import styled from 'styled-components';

import { Button } from './Button';
import type { IButton } from './types';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    onClick: { control: { type: null } },
    disabled: { control: 'boolean' },
    leftSlot: { control: 'text' },
    rightSlot: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
    buttonStyle: {},
  },
};

export const Default = (args: IButton) => (
  <StyledBox>
    <Button {...args} />
  </StyledBox>
);

const StyledBox = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
