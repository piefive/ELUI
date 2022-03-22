import styled from 'styled-components';

export const StyledSliderSlider = styled.div`
  position: relative;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.primary_700};
`;

export const StyledRail = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.grey_200};
`;

export const StyledInput = styled.input`
  position: absolute;
  left: -99999px;
  width: 0;
  height: 0;
  border: 0;
  background-color: transparent;
`;
