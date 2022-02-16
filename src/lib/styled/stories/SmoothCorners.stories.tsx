import styled, { css } from 'styled-components';

import { Typography } from 'components';

import { smoothCornersMixin } from '../mixins';
import { TStyledComponentsProps, getComponentStyle } from '../get-component-style';

type TGetBorderRadius = {
  x?: number;
  y?: number;
  borderRadius: number;
};

export const SmoothCorners = ({ x, y, borderRadius }: TGetBorderRadius) => {
  return (
    <>
      <StyledDoc>
        <Typography tag="h1" variant="h4" typographyStyle={{ display: 'block' }}>
          Smooth corners
        </Typography>
        <Typography variant="caption">
          Superellipse masks using the CSS{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini" target="_blank">
            Houdini API
          </a>
        </Typography>
      </StyledDoc>
      <StyledDoc>
        <Typography variant="h5" typographyStyle={{ display: 'block', marginBottom: 14 }}>
          Example
        </Typography>
        <StyledRow>
          <StyledTest
            styled={css`
              ${smoothCornersMixin({ x, y }, borderRadius)};
              margin-right: 20px;
            `}
          >
            <Typography color="white">smooth</Typography>
          </StyledTest>
          <StyledTest styled={{ borderRadius }}>
            <Typography color="white">default</Typography>
          </StyledTest>
        </StyledRow>
      </StyledDoc>
      <StyledDoc>
        <Typography variant="h5" typographyStyle={{ display: 'block', marginBottom: 14 }}>
          Usage
        </Typography>
        <Typography variant="caption" typographyStyle={{ whiteSpace: 'pre-wrap' }}>
          {`const StyledBox = styled.div\`
  \${smoothCornersMixin({ x: ${x ?? 0}, y: ${y ?? 0} }, ${borderRadius ?? 0})};
\`;`}
        </Typography>
      </StyledDoc>
    </>
  );
};

const StyledRow = styled.div`
  display: flex;
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

const StyledTest = styled.div<{ styled?: TStyledComponentsProps }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.palette.primary_900};

  ${({ styled, theme }) => getComponentStyle(styled, { theme })}
`;

export default {
  title: 'Utils/Mixins',
  component: SmoothCorners,
  args: {
    x: 10,
    borderRadius: 10,
    y: null,
  },
};
