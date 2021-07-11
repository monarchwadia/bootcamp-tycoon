import 'reflect-metadata';

import { Container } from 'inversify';
import BootcampTycoon from './BootcampTycoon';
import { InitOptions } from './InitOptions';
import StateManager from './StateManager';
import ActionManager from './ActionManager';
import { __createBinding } from 'tslib';

import actionHandlers from './actionHandlers';

const createContainer = (opts: InitOptions) => {
  const c = new Container();

  // classes
  c.bind(BootcampTycoon).to(BootcampTycoon);
  c.bind(StateManager).to(StateManager);
  c.bind(ActionManager).to(ActionManager);
  c.bind(InitOptions).toConstantValue(opts);
  actionHandlers.forEach((ah) => c.bind('ActionHandlers').to(ah));

  return c;
};

export { createContainer };
