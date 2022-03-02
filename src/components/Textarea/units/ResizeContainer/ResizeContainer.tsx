import { useCallback, useRef, useState } from 'react';
import { css } from 'styled-components';

import { Icon } from 'components';

import { StyledResizeCorner } from './styled';
import type { TResizeContainer } from './types';

export const ResizeContainer = ({ fieldRef, children, isDisabled }: TResizeContainer) => {
  const iconRef = useRef<SVGSVGElement>();
  const [{ height }, setStyle] = useState({ height: 0, prevScreenY: 0 });

  const onCornerMouseMove = useCallback(
    event => {
      setStyle(({ height, prevScreenY }) => {
        const movementY = prevScreenY ? event.screenY - prevScreenY : fieldRef?.current.clientHeight ?? 0;

        return {
          height: height + movementY,
          prevScreenY: event.screenY,
        };
      });
    },
    [fieldRef]
  );

  const disableSelect = useCallback(event => {
    event.preventDefault();
  }, []);

  const unSubscribeCorner = useCallback(() => {
    window.removeEventListener('mousemove', onCornerMouseMove);
    window.removeEventListener('mouseup', unSubscribeCorner);
    window.removeEventListener('selectstart', disableSelect);
  }, [disableSelect, onCornerMouseMove]);

  const subscribeCorner = useCallback(() => {
    window.addEventListener('mousemove', onCornerMouseMove);
    window.addEventListener('mouseup', unSubscribeCorner);
    window.addEventListener('selectstart', disableSelect);
  }, [disableSelect, onCornerMouseMove, unSubscribeCorner]);

  return (
    <>
      {children(height)}
      <StyledResizeCorner>
        <Icon.Resize
          ref={iconRef}
          size={8}
          onMouseDown={!isDisabled ? subscribeCorner : undefined}
          iconStyle={css`
            path {
              stroke-width: 5px;
            }
          `}
        />
      </StyledResizeCorner>
    </>
  );
};
