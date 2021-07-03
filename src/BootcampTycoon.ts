import CodeAh from './actionHandlers/CodeAh';
import ActionManager from './ActionManager';
import Player from './state/Player';
import State from './state/State';

type InitOptions = {
  name: string;
};
export default class BootcampTycoon {
  readonly _initOptions: InitOptions;
  readonly state: State;
  readonly actionManager: ActionManager;

  constructor(opts: InitOptions) {
    this._initOptions = opts;

    // initialize state
    const player = new Player(opts.name);
    this.state = new State(player);

    // create ActionManager
    this.actionManager = new ActionManager([CodeAh]);
  }

  act<T = any>(action: Action<T>) {
    this.actionManager.handle(action, this.state);
  }
}
