import styled, { DefaultTheme, css } from 'styled-components';

import type { IMenu, TMenuItem } from 'components/Menu';
import { getAria, getComponentStyle, normalizeMixin } from 'lib';

interface IStyledMenuItem {
  isChecked: boolean;
  disabled: boolean;
}

const menuItemMixin = ({ isChecked, disabled, theme }: IStyledMenuItem & { theme: DefaultTheme }) => {
  if (disabled)
    return css`
      background-color: ${theme.palette.white};
      color: ${theme.palette.grey_200};
      cursor: not-allowed;
    `;

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

export const StyledMenuItem = styled.div<IStyledMenuItem>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  transition-property: background-color, color;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  cursor: pointer;

  ${menuItemMixin};
`;

export const StyledMenuItemBox = styled.li<Pick<IMenu, 'itemsStyle'> & Pick<TMenuItem, 'itemStyle'>>`
  ${normalizeMixin};

  width: 100%;
  min-height: 44px;
  padding: 2px 4px;
  list-style: none;

  &:focus {
    outline: none;

    &:not([${getAria('aria-disabled', true)}]) {
      ${StyledMenuItem} {
        background-color: ${({ theme }) => theme.palette.grey_200};
      }
    }
  }

  ${({ theme, itemsStyle }) => getComponentStyle(itemsStyle, { theme })};
  ${({ theme, itemStyle }) => getComponentStyle(itemStyle, { theme })};
`;

export const StyledMenuItemLeftContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMenuItemLeftSlot = styled.div`
  display: flex;
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
  white-space: nowrap;
`;

export const StyledMenuItemSeparator = styled.div<Pick<TMenuItem, 'separatorStyle'>>`
  width: 100%;
  height: 1px;
  margin: 4px 0;
  background-color: ${({ theme }) => theme.palette.grey_300};

  ${({ theme, separatorStyle }) => getComponentStyle(separatorStyle, { theme })};
`;
