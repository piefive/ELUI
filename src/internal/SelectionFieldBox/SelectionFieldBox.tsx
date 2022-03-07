import { Typography } from 'components';

import { FieldBox } from '../FieldBox';

import type { ISelectionFieldBox } from './types';
import { StyledDescription, StyledSelectionBox, StyledSelectionContent } from './styled';

export const SelectionFieldBox = ({
  className,
  boxClassName,
  variant,
  label,
  message,
  children,
  ...rest
}: ISelectionFieldBox) => {
  return (
    <FieldBox className={boxClassName} {...rest}>
      <StyledSelectionBox {...{ className }}>
        {children}
        <StyledSelectionContent>
          <Typography variant="b1">{label}</Typography>
          <StyledDescription variant="b2">{message}</StyledDescription>
        </StyledSelectionContent>
      </StyledSelectionBox>
    </FieldBox>
  );
};
