export { default } from './BootcampTycoon';
import 'reflect-metadata';

import { container } from 'tsyringe';
import BootcampTycoon from './BootcampTycoon';
import { InitOptions } from './TInitOptions';
import StateManager from './StateManager';

export const startBootcampTycoon = (opts: InitOptions) => {
  const c = container.createChildContainer();

  c.register(BootcampTycoon, { useClass: BootcampTycoon });
  c.register(InitOptions, { useValue: opts });
  c.register(StateManager, { useClass: StateManager });

  return c.resolve(BootcampTycoon);
};
