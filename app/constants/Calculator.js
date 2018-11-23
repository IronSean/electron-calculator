// @flow

export const Operations = {
  Addition: '+',
  Subtraction: '-',
  Multiplication: '*',
  Division: '/',
  None: ''
};

export type Operation = $Keys<typeof Operations>;
