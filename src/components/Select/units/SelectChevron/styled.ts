import styled from 'styled-components';

import { Icon } from 'components/Icon';

export const StyledSelectChevron = styled(Icon.ChevronDown)<{ isOpen: boolean }>`
  transition-property: transform;
  transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
`;
