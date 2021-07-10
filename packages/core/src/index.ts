export { default } from './BootcampTycoon';
import 'reflect-metadata';

import { container } from 'tsyringe';
import BootcampTycoon from './BootcampTycoon';
import { InitOptions } from './TInitOptions';
import StateManager from './StateManager';
import ActionManager from './ActionManager';
import TActionHandler from './actionHandlers/TActionHandler';
import actionHandlers from './actionHandlers';

export const startBootcampTycoon = (opts: InitOptions) => {
  const c = container.createChildContainer();

  // options
  c.register(InitOptions, { useValue: opts });

  // classes
  c.register(BootcampTycoon, { useClass: BootcampTycoon });
  c.register(StateManager, { useClass: StateManager });
  c.register(ActionManager, { useClass: ActionManager });

  // actions
  c.register<TActionHandler[]>('DefaultActions', { useValue: actionHandlers });

  return c.resolve(BootcampTycoon);
};
