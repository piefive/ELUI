import styled from 'styled-components';

import { Typography } from 'components';

import { scrollBarMixin } from '../mixins';

export const Scrollbar = () => {
  return (
    <>
      <StyledDoc>
        <Typography tag="h1" variant="h4" typographyStyle={{ display: 'block' }}>
          Scrollbar
        </Typography>
        <Typography variant="caption">Smooth scrollbar for container</Typography>
      </StyledDoc>
      <StyledDoc>
        <Typography variant="h5" typographyStyle={{ display: 'block', marginBottom: 14 }}>
          Example
        </Typography>
        <StyledExample>
          <Typography variant="b2">The innovative path we have chosen has not become a limiting factor.</Typography>
          <br />
          <br />
          <br />
          <Typography variant="overline">*scroll down</Typography>
          <br />
          <br />
          <br />
          <br />
          <Typography variant="b2">The innovative path we have chosen has not become a limiting factor.</Typography>
        </StyledExample>
      </StyledDoc>
      <StyledDoc>
        <Typography variant="h5" typographyStyle={{ display: 'block', marginBottom: 14 }}>
          Usage
        </Typography>
        <Typography variant="caption" typographyStyle={{ whiteSpace: 'pre-wrap' }}>
          {`const StyledBox = styled.div\`
  \${scrollBarMixin};
\`;`}
        </Typography>
      </StyledDoc>
    </>
  );
};

const StyledExample = styled.div`
  max-height: 100px;
  overflow: auto;
  ${scrollBarMixin}
`;

const StyledDoc = styled.div`
  position: relative;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;

export default {
  title: 'Utils/Mixins',
  component: Scrollbar,
};
