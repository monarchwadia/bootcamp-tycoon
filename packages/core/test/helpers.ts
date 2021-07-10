import startBootcampTycoon, { BootcampTycoon } from '../src';
import { InitOptions } from '../src/InitOptions';

export const defaultGame = (): BootcampTycoon => {
  return startBootcampTycoon(new InitOptions('Default User'));
};
