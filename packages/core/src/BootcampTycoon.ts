import { TAction } from './types/action';
import CodeAh from './actionHandlers/CodeAh';
import ActionManager from './ActionManager';
import StateManager from './StateManager';
import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { InitOptions } from './TInitOptions';

@injectable()
export default class BootcampTycoon {
  readonly opts: InitOptions;
  readonly state: StateManager;
  readonly actionManager: ActionManager;

  constructor(opts: InitOptions, stateManager: StateManager) {
    this.opts = opts;
    this.state = stateManager;

    // create ActionManager
    this.actionManager = new ActionManager([CodeAh]);
  }

  act<T = any>(action: TAction<T>) {
    return this.actionManager.handle(action, this.state);
  }

  getAvailableActions() {
    return this.actionManager.getAvailableActions();
  }

  getStats() {
    return this.state.getReport();
  }
}
