import { FieldBox } from '../FieldBox';

import type { ITextFieldBox } from './types';
import { TextFieldRightSlot } from './units';
import { StyledField, StyledLeftSlot } from './styled';

export const TextFieldBox = <Element extends HTMLInputElement | HTMLTextAreaElement>({
  fieldRef = null,
  containerRef,
  isClearable = false,
  isDisabled = false,
  isFocused = false,
  children,
  leftSlot,
  rightSlot,
  ...rest
}: ITextFieldBox<Element>) => {
  const { validate } = rest;
  const isRightSlotRender = Boolean(isClearable || rightSlot);

  const onFieldFocus = () => fieldRef?.current.focus();

  return (
    <FieldBox onLabelClick={onFieldFocus} {...rest}>
      <StyledField ref={containerRef} onClick={onFieldFocus} {...{ validate, isFocused, isDisabled }}>
        {leftSlot && <StyledLeftSlot>{leftSlot}</StyledLeftSlot>}
        {children}
        {isRightSlotRender && <TextFieldRightSlot {...{ fieldRef, rightSlot, isClearable }} />}
      </StyledField>
    </FieldBox>
  );
};
