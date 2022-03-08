import styled, { DefaultTheme, css } from 'styled-components';

import { SelectionFieldBox } from 'internal/SelectionFieldBox';

import { RADIO_INPUT_CN } from '../../constants';

type TStyledRadioBox = {
  isChecked: boolean;
  isDisabled: boolean;
};

const BOX_SHADOW_PROP = '0 0 0 4px';

const radioInputMixin = ({ theme, isChecked, isDisabled }: TStyledRadioBox & { theme: DefaultTheme }) => {
  if (isDisabled)
    return css`
      .${RADIO_INPUT_CN} {
        background-color: ${theme.palette.white};
        color: ${theme.palette.grey_400};
        border-color: ${theme.palette.grey_200};
      }
    `;

  const activeMixin = css`
    &:active {
      .${RADIO_INPUT_CN} {
        box-shadow: ${BOX_SHADOW_PROP} ${theme.palette.primary_200};
      }
    }
  `;

  if (isChecked)
    return css`
      cursor: pointer;

      .${RADIO_INPUT_CN} {
        background-color: ${theme.palette.white};
        border-color: ${theme.palette.primary_700};
        color: ${theme.palette.primary_700};
      }

      &:hover {
        .${RADIO_INPUT_CN} {
          border-color: ${theme.palette.primary_400};
          color: ${theme.palette.primary_400};
          box-shadow: ${BOX_SHADOW_PROP} ${theme.palette.primary_100};
        }
      }

      ${activeMixin};
    `;

  return css`
    cursor: pointer;

    .${RADIO_INPUT_CN} {
      background-color: ${theme.palette.white};
      border-color: ${theme.palette.primary_700};
      color: ${theme.palette.primary_700};
    }

    &:hover {
      cursor: pointer;

      .${RADIO_INPUT_CN} {
        border-color: ${theme.palette.primary_400};
        color: ${theme.palette.primary_400};
        box-shadow: ${BOX_SHADOW_PROP} ${theme.palette.primary_100};
      }
    }

    ${activeMixin};
  `;
};

export const StyledRadioBox = styled(SelectionFieldBox)<TStyledRadioBox>`
  ${radioInputMixin}
`;

export const StyledRadio = styled.div`
  position: relative;
  width: 24px;
  min-width: 24px;
  height: 24px;
  min-height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: transparent;
  transition-property: background-color, border-color, color, box-shadow;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
`;

export const StyledRadioIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: currentColor;
  color: inherit;
`;

export const StyledRadioInput = styled.input`
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  visibility: hidden;
`;
