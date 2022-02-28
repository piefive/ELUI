import { useState } from 'react';

import { FieldMessage } from 'internal';

import { Button } from '../Button';

export const Input = () => {
  const [a, b] = useState<string>();

  return (
    <div>
      <Button onClick={() => b('')}>check</Button>
      <Button onClick={() => b('This is the description area')}>check</Button>

      <FieldMessage>{a}</FieldMessage>
    </div>
  );
};
