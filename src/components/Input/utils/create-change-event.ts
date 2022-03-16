import type { ChangeEvent } from 'react';

export const createChangeEvent = (nativeEvent: InputEvent) => <ChangeEvent<HTMLInputElement>>(<unknown>{
    bubbles: nativeEvent.bubbles,
    cancelable: nativeEvent.cancelable,
    currentTarget: nativeEvent.currentTarget,
    defaultPrevented: nativeEvent.defaultPrevented,
    eventPhase: nativeEvent.eventPhase,
    isDefaultPrevented: () => false,
    isPropagationStopped: () => false,
    isTrusted: nativeEvent.isTrusted,
    nativeEvent,
    target: nativeEvent.target,
    timeStamp: nativeEvent.timeStamp,
    type: 'change',
  });
