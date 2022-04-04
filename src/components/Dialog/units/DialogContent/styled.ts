import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import { TStyledComponentsProps, getComponentStyle, normalizeMixin, tabletMedia } from 'lib';

export const StyledDialog = styled(animated.div)<{ $isBottomSheet: boolean }>`
  ${normalizeMixin};

  position: fixed;

  ${({ $isBottomSheet }) => {
    if ($isBottomSheet)
      return css`
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        max-height: 90%;
      `;

    return css`
      top: 50%;
      left: 50%;
      width: 95%;
      max-width: 640px;
      max-height: 90%;

      @media (${tabletMedia}) {
        width: 100%;
      }
    `;
  }};
`;

export const StyledDialogBox = styled.div<{
  boxStyle?: TStyledComponentsProps;
  isBottomSheet: boolean;
}>`
  position: relative;
  width: 100%;
  border-radius: ${({ isBottomSheet }) => (isBottomSheet ? '16px 16px 0px 0px' : '16px')};
  overflow: hidden;
  background: ${({ theme }) => theme.palette.white};

  ${({ isBottomSheet }) =>
    !isBottomSheet &&
    css`
      box-shadow: 0 3px 13px rgba(0, 0, 0, 0.039), 0 10.5px 36px rgba(0, 0, 0, 0.19);
    `}

  ${({ theme, boxStyle }) => getComponentStyle(boxStyle, { theme })};
`;

export const StyledDialogHeader = styled.div<{ headerStyle?: TStyledComponentsProps }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.palette.grey_200};
  padding: 16px;

  @media (${tabletMedia}) {
    padding: 16px 16px 16px 24px;
  }

  ${({ theme, headerStyle }) => getComponentStyle(headerStyle, { theme })};
`;

export const StyledDialogBodyScroll = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export const StyledDialogBody = styled.div<{ bodyStyle?: TStyledComponentsProps }>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media (${tabletMedia}) {
    padding: 24px;
  }

  ${({ theme, bodyStyle }) => getComponentStyle(bodyStyle, { theme })};
`;

export const StyledDialogFooter = styled.div<{ footerStyle?: TStyledComponentsProps }>`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px 16px;

  @media (${tabletMedia}) {
    flex-direction: row;
    padding: 0 24px 24px 24px;
  }

  ${({ theme, footerStyle }) => getComponentStyle(footerStyle, { theme })};
`;
