import styled, { useTheme } from 'styled-components';

import type { theme } from 'lib';
import { Typography } from 'components';

type TPalette = typeof theme.palette;

type TPaletteItem = {
  paletteName: keyof TPalette;
  textPaletteName: keyof TPalette;
};

export const Palette = () => {
  return (
    <StyledBox>
      <StyledPaletteContent>
        <PaletteItem paletteName="white" textPaletteName="black" />
        <PaletteItem paletteName="black" textPaletteName="white" />
        <PaletteItem paletteName="error" textPaletteName="white" />
        <PaletteItem paletteName="success" textPaletteName="white" />
      </StyledPaletteContent>
      <StyledPaletteContent>
        <PaletteItem paletteName="grey_50" textPaletteName="black" />
        <PaletteItem paletteName="grey_100" textPaletteName="black" />
        <PaletteItem paletteName="grey_200" textPaletteName="black" />
        <PaletteItem paletteName="grey_300" textPaletteName="black" />
        <PaletteItem paletteName="grey_400" textPaletteName="black" />
        <PaletteItem paletteName="grey_500" textPaletteName="black" />
        <PaletteItem paletteName="grey_600" textPaletteName="white" />
        <PaletteItem paletteName="grey_700" textPaletteName="white" />
        <PaletteItem paletteName="grey_800" textPaletteName="white" />
        <PaletteItem paletteName="grey_900" textPaletteName="white" />
      </StyledPaletteContent>
      <StyledPaletteContent>
        <PaletteItem paletteName="primary_50" textPaletteName="black" />
        <PaletteItem paletteName="primary_100" textPaletteName="black" />
        <PaletteItem paletteName="primary_200" textPaletteName="black" />
        <PaletteItem paletteName="primary_300" textPaletteName="white" />
        <PaletteItem paletteName="primary_400" textPaletteName="white" />
        <PaletteItem paletteName="primary_500" textPaletteName="white" />
        <PaletteItem paletteName="primary_600" textPaletteName="white" />
        <PaletteItem paletteName="primary_700" textPaletteName="white" />
      </StyledPaletteContent>
    </StyledBox>
  );
};

const PaletteItem = ({ paletteName, textPaletteName }: TPaletteItem) => {
  const { palette } = useTheme();
  const current = palette[paletteName];

  return (
    <StyledPaletteItem>
      <StyledPalette bgColor={current} color={palette[textPaletteName]}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      </StyledPalette>
      <div>
        <Typography
          variant="b2"
          typographyStyle={({ theme }) => ({ display: 'block', marginBottom: 4, color: theme.palette.grey_900 })}
        >
          {paletteName}
        </Typography>
        <Typography
          variant="caption"
          typographyStyle={({ theme }) => ({ display: 'block', marginBottom: 4, color: theme.palette.grey_700 })}
        >
          {current}
        </Typography>
      </div>
    </StyledPaletteItem>
  );
};

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 228px);
  gap: 24px;
`;

const StyledPaletteContent = styled.div`
  display: grid;
  align-content: start;
  gap: 24px;
`;

const StyledPaletteItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0 0 8px ${({ theme }) => theme.palette.grey_300};
`;

const StyledPalette = styled.div<{ bgColor: string; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 8px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
`;

export default {
  title: 'Introduction/Palette',
  component: Palette,
};
