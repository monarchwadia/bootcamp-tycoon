import { TAction } from './types/action';
import CodeAh from './actionHandlers/CodeAh';
import ActionManager from './ActionManager';
import StateManager from './StateManager';

type TInitOptions = {
  name: string;
};
export default class BootcampTycoon {
  readonly _initOptions: TInitOptions;
  readonly state: StateManager;
  readonly actionManager: ActionManager;

  constructor(opts: TInitOptions) {
    this._initOptions = opts;

    // initialize state
    this.state = new StateManager(opts.name);

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
