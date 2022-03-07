import styled, { css } from 'styled-components';

import { Typography } from 'components';

import { figmaSmoothCornersMixin } from '../mixins';
import { TStyledComponentsProps, getComponentStyle } from '../get-component-style';

type TGetBorderRadius = {
  borderRadius: number;
  cornerSmoothing: number;
};

export const FigmaSmoothCorners = ({ borderRadius, cornerSmoothing }: TGetBorderRadius) => {
  return (
    <>
      <StyledDoc>
        <Typography tag="h1" variant="h4" typographyStyle={{ display: 'block' }}>
          Smooth corners
        </Typography>
        <Typography variant="caption">
          Figma smooth corners masks using the CSS{' '}
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
              ${figmaSmoothCornersMixin(borderRadius, cornerSmoothing)};
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
  \${figmaSmoothCornersMixin(${borderRadius}, ${cornerSmoothing})};
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
  component: FigmaSmoothCorners,
  args: {
    borderRadius: 24,
    cornerSmoothing: 0.6,
  },
};
