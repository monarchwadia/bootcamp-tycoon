import TActionHandler from './actionHandlers/TActionHandler';
import State from './state/State';

export default class ActionManager {
  actions: Record<string, TActionHandler>;

  constructor(actionsRegistry: TActionHandler[]) {
    this.actions = {};

    // add all available actions to the ActionManager
    actionsRegistry.forEach((action) => {
      const { id } = action;

      // don't allow duplicate actions
      if (this.actions[id]) {
        throw new Error(`Action with name [${id}] is a duplicate.`);
      }

      this.actions[id] = action;
    });
  }

  handle<T = any>(action: Action<T>, state: State) {
    const { id } = action;
    const actionHandler = this.actions[id];
    actionHandler.handle(action, state);
  }
}
