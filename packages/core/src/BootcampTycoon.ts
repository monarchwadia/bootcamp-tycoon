import { TAction } from './types/action';
import ActionManager from './ActionManager';
import StateManager from './StateManager';
import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { InitOptions } from './TInitOptions';

@injectable()
export default class BootcampTycoon {
  constructor(readonly opts: InitOptions, readonly state: StateManager, readonly actionManager: ActionManager) {}

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
