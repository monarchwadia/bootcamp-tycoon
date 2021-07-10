import 'reflect-metadata';

import { container } from 'tsyringe';
import BootcampTycoon from './BootcampTycoon';
import { InitOptions } from './InitOptions';
import StateManager from './StateManager';
import ActionManager from './ActionManager';
import TActionHandler from './actionHandlers/TActionHandler';
import actionHandlers from './actionHandlers';

const startBootcampTycoon = (opts: InitOptions) => {
  const c = container.createChildContainer();

  // classes
  c.register(BootcampTycoon, { useClass: BootcampTycoon });

  // options
  c.register(InitOptions, { useValue: opts });

  c.register(StateManager, { useClass: StateManager });
  c.register(ActionManager, { useClass: ActionManager });

  // actions
  c.register<TActionHandler[]>('DefaultActions', { useValue: actionHandlers });

  return c.resolve(BootcampTycoon);
};

export default startBootcampTycoon;
export { BootcampTycoon };
