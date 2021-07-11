import startBootcampTycoon, { BootcampTycoon } from '../src';
import { InitOptions } from '../src/InitOptions';

export const DEFAULT_FULL_NAME = 'Default User';

export const defaultGame = (): BootcampTycoon => {
  return startBootcampTycoon(new InitOptions(DEFAULT_FULL_NAME));
};
