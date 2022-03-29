import { FieldBox } from '../FieldBox';

import type { ITextFieldBox } from './types';
import { TextFieldRightSlot } from './units';
import { StyledContent, StyledField, StyledLeftSlot } from './styled';

export const TextFieldBox = <Element extends HTMLElement>({
  fieldRef = null,
  boxRef,
  containerRef,
  isClearable = false,
  isDisabled = false,
  isFocused = false,
  children,
  leftSlot,
  rightSlot,
  fieldStyle,
  ...rest
}: ITextFieldBox<Element>) => {
  const { validate } = rest;
  const isRightSlotRender = Boolean(isClearable || rightSlot);

  const onFieldFocus = () => fieldRef?.current.focus();

  return (
    <FieldBox ref={boxRef} onLabelClick={onFieldFocus} {...rest}>
      <StyledField ref={containerRef} onClick={onFieldFocus} {...{ validate, isFocused, isDisabled, fieldStyle }}>
        {leftSlot && <StyledLeftSlot>{leftSlot}</StyledLeftSlot>}
        <StyledContent>{children}</StyledContent>
        {isRightSlotRender && <TextFieldRightSlot {...{ fieldRef, rightSlot, isClearable }} />}
      </StyledField>
    </FieldBox>
  );
};
