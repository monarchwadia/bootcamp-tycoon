import 'reflect-metadata';
import { TAction } from './types/action';
import ActionManager from './ActionManager';
import StateManager from './StateManager';
import { InitOptions } from './InitOptions';
import { inject, injectable } from 'inversify';
import { Observer } from './Observer';

@injectable()
export default class BootcampTycoon {
  private updateObserver: Observer;

  constructor(
    @inject(StateManager) readonly state: StateManager,
    @inject(ActionManager) readonly actionManager: ActionManager,
    @inject(InitOptions) readonly opts: InitOptions
  ) {
    this.updateObserver = new Observer();
  }

  act<T = any>(action: TAction<T>) {
    const info = this.actionManager.handle(action, this.state);
    this.updateObserver.inform(info);
    return info;
  }

  getAvailableActions() {
    return this.actionManager.getAvailableActions();
  }

  getReport() {
    return this.state.getReport();
  }

  onUpdate(cb: () => void) {
    this.updateObserver.subscribe(cb);
  }
}
