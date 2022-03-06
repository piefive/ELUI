import styled from 'styled-components';

import { Typography } from '../Typography';

import type { TPortal } from './types';
import { Portal } from './Portal';

export default {
  title: 'ui/Portal',
  component: Portal,
  args: {
    name: 'test',
  },
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

export const Default = (args: TPortal) => {
  return (
    <StyledBox>
      <Typography tag="h1" variant="h4" typographyStyle={{ display: 'block' }}>
        Portal
      </Typography>
      <Typography variant="caption">
        Portals provide a way to render children into a DOM node that exists outside the hierarchy of the DOM component.
      </Typography>
      <Portal {...args}>
        <StyledBox style={{ marginTop: 24 }}>
          <Typography>Inspect this element</Typography>
        </StyledBox>
      </Portal>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  position: relative;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;
