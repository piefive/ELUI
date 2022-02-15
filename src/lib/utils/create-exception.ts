type TExceptionVariant = 'console' | 'throw';

type TExceptionOptions = {
  variant?: TExceptionVariant;
  withName?: boolean;
};

const INITIAL_OPTIONS: TExceptionOptions = {
  variant: 'throw',
  withName: false,
};

export const createException = (error: string, { variant, withName }: TExceptionOptions = INITIAL_OPTIONS) => {
  const message = `${withName ? 'Elui error: ' : ''}${error}`;

  if (variant === 'throw') throw new Error(message);
  // eslint-disable-next-line no-console
  if (variant === 'console') console.error(variant);
};
