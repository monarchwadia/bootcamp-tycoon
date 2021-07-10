import 'reflect-metadata';

import { Container } from 'inversify';
import BootcampTycoon from './BootcampTycoon';
import { InitOptions } from './InitOptions';
import StateManager from './StateManager';
import ActionManager from './ActionManager';
import { __createBinding } from 'tslib';

import CodeAh from './actionHandlers/CodeAh';

const startBootcampTycoon = (opts: InitOptions) => {
  const c = new Container();

  // classes
  c.bind(BootcampTycoon).to(BootcampTycoon);
  c.bind(StateManager).to(StateManager);
  c.bind(ActionManager).to(ActionManager);
  c.bind(InitOptions).toConstantValue(opts);
  c.bind(CodeAh).to(CodeAh);

  return c.resolve(BootcampTycoon);
};

export default startBootcampTycoon;
export { BootcampTycoon };
