import CodeAh from './actionHandlers/CodeAh';
import ActionManager from './ActionManager';
import StateManager from './StateManager';

type InitOptions = {
  name: string;
};
export default class BootcampTycoon {
  readonly _initOptions: InitOptions;
  readonly state: StateManager;
  readonly actionManager: ActionManager;

  constructor(opts: InitOptions) {
    this._initOptions = opts;

    // initialize state
    this.state = new StateManager(opts.name);

    // create ActionManager
    this.actionManager = new ActionManager([CodeAh]);
  }

  act<T = any>(action: Action<T>) {
    this.actionManager.handle(action, this.state);
  }
}
