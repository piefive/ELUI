import styled, { DefaultTheme, css } from 'styled-components';

type TStyledMenuItem = {
  isChecked: boolean;
};

const menuItemMixin = ({ isChecked, theme }: TStyledMenuItem & { theme: DefaultTheme }) => {
  if (isChecked)
    return css`
      background-color: ${theme.palette.primary_100};
    `;

  return css`
    background-color: ${theme.palette.white};

    &:hover {
      background-color: ${theme.palette.grey_200};
    }
  `;
};

export const StyledMenuItem = styled.li<TStyledMenuItem>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 44px;
  padding: 12px 16px;
  border-radius: 6px;
  transition-property: background-color, color;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  cursor: pointer;

  ${menuItemMixin};
`;

export const StyledMenuItemLeftContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMenuItemLeftSlot = styled.div`
  margin-right: 16px;
`;

export const StyledMenuItemLeftSlotEmpty = styled.div`
  width: 24px;
  height: 24px;
  background-color: transparent;
`;

export const StyledMenuItemRightContent = styled.div`
  display: flex;
  align-items: center;
`;
