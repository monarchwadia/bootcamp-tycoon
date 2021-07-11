import 'reflect-metadata';

import BootcampTycoon from './BootcampTycoon';
import { InitOptions } from './InitOptions';
import { __createBinding } from 'tslib';
import { createContainer } from './Container';

const startBootcampTycoon = (opts: InitOptions) => {
  const c = createContainer(opts);
  return c.resolve(BootcampTycoon);
};

export default startBootcampTycoon;
export { BootcampTycoon };
