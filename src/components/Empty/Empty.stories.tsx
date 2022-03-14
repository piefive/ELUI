import styled from 'styled-components';

import { Button } from 'components/Button';
import { Typography } from 'components/Typography';

import { Empty } from './Empty';
import type { TEmpty } from './types';

export default {
  component: Empty,
  title: 'ui/Empty',
  argTypes: {
    image: { control: { type: 'text' } },
  },
  args: {
    title: 'Empty state title',
    image: '/images/github.svg',
    description:
      'Gravida eget eleifend varius purus posuere duis. Sit malesuada molestie morbi est, volutpat scelerisque mi.',
    primaryBtn: { children: 'Primary button' },
    secondaryBtn: { children: 'Tertiary button' },
    boxStyle: { margin: '0 auto' },
  },
};

export const Default = (args: TEmpty) => (
  <StyledBox>
    <Empty {...args} />
  </StyledBox>
);

const StyledBox = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
