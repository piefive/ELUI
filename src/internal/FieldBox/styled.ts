import styled from 'styled-components';

import { TStyledComponentsProps, getComponentStyle, normalizeMixin } from 'lib';

import { FieldMessage } from './units';

export const StyledFieldBox = styled.div<{ boxStyle?: TStyledComponentsProps }>`
  ${normalizeMixin};

  width: 100%;
  padding-bottom: 24px;

  ${({ theme, boxStyle }) => getComponentStyle(boxStyle, { theme })}
`;

export const StyledMessage = styled(FieldMessage)`
  display: block;
  padding-top: 8px;
`;

export const StyledValidateMessage = styled(StyledMessage)<{ validate: boolean }>`
  color: ${({ theme, validate }) => (validate ? theme.palette.success : theme.palette.error)};
`;
