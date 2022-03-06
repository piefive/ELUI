import styled from 'styled-components';

import { Typography } from '../Typography';

import type { TScrollContainer } from './types';
import { ScrollContainer } from './ScrollContainer';

export default {
  title: 'ui/ScrollContainer',
  component: ScrollContainer,
  args: {
    scrollAfterReachedBoundaries: false,
    dragOnly: false,
    className: '',
    boxStyle: { display: 'block' },
  },
};

export const Default = (args: TScrollContainer) => {
  return (
    <StyledBox>
      <Typography tag="h1" variant="h4" typographyStyle={{ display: 'block' }}>
        ScrollContainer
      </Typography>
      <Typography variant="caption">
        Portals provide a way to render children into a DOM node that exists outside the hierarchy of the DOM component.
      </Typography>
      <StyledBox style={{ marginTop: 24 }}>
        <StyledContent>
          <ScrollContainer {...args}>
            {Array.from({ length: 45 }, (_, i) => (
              <Typography
                key={i}
                typographyStyle={({ theme }) => ({
                  whiteSpace: 'nowrap',
                  marginRight: 24,
                  padding: '8px 14px',
                  background: theme.palette.grey_100,
                })}
              >
                content {i}
              </Typography>
            ))}
          </ScrollContainer>
        </StyledContent>
      </StyledBox>
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

const StyledContent = styled.div`
  display: flex;
  max-width: 100%;
`;
