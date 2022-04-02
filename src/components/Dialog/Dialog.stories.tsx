import styled from 'styled-components';

import { Button } from 'components/Button';

import type { TDialog } from './types';
import { Dialog } from './Dialog';
import { dialog } from './utils';

export default {
  title: 'ui/Dialog',
  component: Dialog,
};

export const Default = (args: TDialog) => {
  return (
    <StyledBox>
      <Button onClick={() => dialog.toggle('test')}>Open dialog</Button>
      <Dialog {...args} name="test" />
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
