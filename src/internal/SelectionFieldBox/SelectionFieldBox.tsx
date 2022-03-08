import { Typography } from 'components';

import { FieldBox } from '../FieldBox';

import type { ISelectionFieldBox } from './types';
import { StyledDescription, StyledSelectionBox, StyledSelectionContent } from './styled';

export const SelectionFieldBox = ({
  className,
  boxClassName,
  variant = 'primary',
  label,
  message,
  children,
  isChecked,
  isDisabled,
  ...rest
}: ISelectionFieldBox) => {
  const hasContent = Boolean(label || message);
  return (
    <FieldBox className={boxClassName} {...rest}>
      <StyledSelectionBox {...{ className, variant, isChecked, isDisabled }}>
        {children}
        {hasContent && (
          <StyledSelectionContent>
            <Typography variant="b1" typographyStyle={{ color: 'inherit' }}>
              {label}
            </Typography>
            <StyledDescription variant="b2" {...{ isDisabled }}>
              {message}
            </StyledDescription>
          </StyledSelectionContent>
        )}
      </StyledSelectionBox>
    </FieldBox>
  );
};
