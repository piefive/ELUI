import { FieldBox } from '../FieldBox';

import type { ITextFieldBox } from './types';
import { TextFieldRightSlot } from './units';
import { StyledContent, StyledField, StyledFieldBody, StyledFooterSlot, StyledLeftSlot } from './styled';

export const TextFieldBox = <Element extends HTMLElement>({
  fieldRef = null,
  boxRef,
  containerRef,
  leftSlotRef,
  rightSlotRef,
  isClearable = false,
  isDisabled = false,
  isFocused = false,
  children,
  leftSlot,
  rightSlot,
  footerSlot,
  fieldStyle,
  ...rest
}: ITextFieldBox<Element>) => {
  const { validate } = rest;

  const isRightSlotRender = Boolean(isClearable || rightSlot);

  const onFieldFocus = () => fieldRef?.current.focus();

  return (
    <FieldBox ref={boxRef} onLabelClick={onFieldFocus} {...rest}>
      <StyledField ref={containerRef} onClick={onFieldFocus} {...{ validate, isFocused, isDisabled, fieldStyle }}>
        <StyledFieldBody>
          {leftSlot && <StyledLeftSlot ref={leftSlotRef}>{leftSlot}</StyledLeftSlot>}
          <StyledContent>{children}</StyledContent>
          {isRightSlotRender && (
            <TextFieldRightSlot innerRef={rightSlotRef} {...{ fieldRef, rightSlot, isClearable }} />
          )}
        </StyledFieldBody>
        {footerSlot && <StyledFooterSlot>{footerSlot}</StyledFooterSlot>}
      </StyledField>
    </FieldBox>
  );
};
