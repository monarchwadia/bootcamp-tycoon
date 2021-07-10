import 'reflect-metadata';
import { TAction } from './types/action';
import ActionManager from './ActionManager';
import StateManager from './StateManager';
import { InitOptions } from './InitOptions';
import { inject, injectable } from 'inversify';

@injectable()
export default class BootcampTycoon {
  constructor(
    @inject(StateManager) readonly state: StateManager,
    @inject(ActionManager) readonly actionManager: ActionManager,
    @inject(InitOptions) readonly opts: InitOptions
  ) {}

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
