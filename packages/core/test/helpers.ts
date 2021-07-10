import BootcampTycoon, { startBootcampTycoon } from '../src';
import { InitOptions } from '../src/TInitOptions';

export const defaultGame = (): BootcampTycoon => {
  return startBootcampTycoon(new InitOptions('Default User'));
};
