import { bindScrollable, createEventFn, isPrimitiveReactNode, noop, useScrollLock } from 'lib';
import { Typography } from 'components/Typography';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';

import { useDialogTransition } from '../../hooks';

import type { IDialogContent } from './types';
import {
  StyledDialog,
  StyledDialogBody,
  StyledDialogBodyScroll,
  StyledDialogBox,
  StyledDialogFooter,
  StyledDialogHeader,
} from './styled';

const stopPropagation = createEventFn(noop, { isStopPropagation: true, isPreventDefault: false });

export const DialogContent = ({
  variant,
  className,
  isOpen,
  zIndex,
  header,
  children,
  footer,
  onClose,
  boxStyle,
  headerStyle,
  bodyStyle,
  footerStyle,
}: IDialogContent) => {
  const bodyRef = useScrollLock(isOpen);
  const transition = useDialogTransition(variant, isOpen);

  const isBottomSheet = variant === 'bottom-sheet';

  return transition(
    (style, item) =>
      item && (
        <StyledDialog $isBottomSheet={isBottomSheet} style={{ ...style, zIndex }}>
          <StyledDialogBox {...{ className, boxStyle, isBottomSheet }} onClick={stopPropagation}>
            {!!header && (
              <StyledDialogHeader {...{ headerStyle }}>
                <Typography variant="st1">{header}</Typography>
                {onClose && (
                  <Button variant="custom" onClick={onClose} buttonStyle={{ padding: 0, border: 0 }}>
                    <Icon.Cross />
                  </Button>
                )}
              </StyledDialogHeader>
            )}
            <StyledDialogBodyScroll ref={bodyRef}>
              <StyledDialogBody {...{ ...bindScrollable, bodyStyle }}>
                {isPrimitiveReactNode(children) ? <Typography>{children}</Typography> : children}
              </StyledDialogBody>
            </StyledDialogBodyScroll>
            {!!footer && <StyledDialogFooter {...{ footerStyle }}>{footer}</StyledDialogFooter>}
          </StyledDialogBox>
        </StyledDialog>
      )
  );
};
