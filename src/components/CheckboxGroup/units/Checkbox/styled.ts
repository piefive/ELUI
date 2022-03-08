import styled, { DefaultTheme, css } from 'styled-components';

import { SelectionFieldBox, TSelectionFieldVariant } from 'internal/SelectionFieldBox';

import { CHECKBOX_INPUT_CN } from '../../constants';

type TStyledCheckedBox = {
  variant?: TSelectionFieldVariant;
  isChecked: boolean;
  isDisabled: boolean;
};

const BOX_SHADOW_PROP = '0 0 0 4px';

const checkboxInputMixin = ({ theme, isChecked, isDisabled, variant }: TStyledCheckedBox & { theme: DefaultTheme }) => {
  if (isDisabled)
    return css`
      .${CHECKBOX_INPUT_CN} {
        background-color: ${variant === 'primary' && isChecked ? theme.palette.grey_200 : theme.palette.white};
        color: ${theme.palette[isChecked ? 'grey_400' : 'white']};
        border-color: ${theme.palette.grey_200};
      }
    `;

  const activeMixin = css`
    &:active {
      .${CHECKBOX_INPUT_CN} {
        box-shadow: ${BOX_SHADOW_PROP} ${theme.palette.primary_200};
      }
    }
  `;

  if (isChecked)
    return css`
      cursor: pointer;

      .${CHECKBOX_INPUT_CN} {
        background-color: ${theme.palette.primary_700};
        border-color: ${theme.palette.primary_700};
        color: ${theme.palette.white};
      }

      &:hover {
        .${CHECKBOX_INPUT_CN} {
          background-color: ${theme.palette.primary_400};
          border-color: ${theme.palette.primary_400};
          box-shadow: ${BOX_SHADOW_PROP} ${theme.palette.primary_100};
        }
      }

      ${activeMixin};
    `;

  return css`
    cursor: pointer;

    .${CHECKBOX_INPUT_CN} {
      background-color: ${theme.palette.white};
      border-color: ${theme.palette.primary_700};
      color: transparent;
    }

    &:hover {
      cursor: pointer;

      .${CHECKBOX_INPUT_CN} {
        border-color: ${theme.palette.primary_400};
        box-shadow: ${BOX_SHADOW_PROP} ${theme.palette.primary_100};
      }
    }

    ${activeMixin};
  `;
};

export const StyledCheckboxBox = styled(SelectionFieldBox)<TStyledCheckedBox>`
  ${checkboxInputMixin}
`;
