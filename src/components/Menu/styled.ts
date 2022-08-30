import styled from 'styled-components';

import { getComponentStyle } from 'lib';

import type { IMenu } from './types';

export const StyledMenu = styled.ul<Pick<IMenu, 'menuStyle'>>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  ${({ theme, menuStyle }) => getComponentStyle(menuStyle, { theme })}
`;
