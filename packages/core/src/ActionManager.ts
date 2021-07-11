import { TAction, TActionFeedback } from './types/action';
import ActionHandler from './actionHandlers/ActionHandler';
import StateManager from './StateManager';
import { injectable, multiInject } from 'inversify';

@injectable()
export default class ActionManager {
  actions: Record<string, ActionHandler>;

  constructor(@multiInject('ActionHandlers') actionsRegistry: ActionHandler[]) {
    this.actions = {};
    this.registerActionHandlers(...actionsRegistry);
  }

  registerActionHandler(action: ActionHandler) {
    const { id } = action;

    // don't allow duplicate actions
    if (this.actions[id]) {
      throw new Error(`Action with name [${id}] is a duplicate.`);
    }

    this.actions[id] = action;
  }

  registerActionHandlers(...actions: ActionHandler[]) {
    actions.forEach((action) => this.registerActionHandler(action));
  }

  handle<T = any>(action: TAction<T>, state: StateManager): TActionFeedback {
    const { id } = action;
    const actionHandler = this.actions[id];
    const timestamp = state.data.time;

    // don't allow the action if it is not available.
    if (actionHandler.isEnabled && !actionHandler.isEnabled(state)) {
      return {
        code: 'disabled',
        message: 'This action is disabled.',
        timestamp,
      };
    }

    // don't allow the action if the cost is greater than the available energy
    if (actionHandler.cost.energy > state.data.player.resources.energy.curr) {
      return {
        code: 'exhausted',
        message: "You don't have enough energy to complete this task.",
        timestamp,
      };
    }

    // deduct the energy
    state.data.player.resources.energy.curr -= actionHandler.cost.energy;

    // increment time
    state.data.time += actionHandler.cost.minutes * 60 * 1000;

    const message = actionHandler.handle(action, state);

    return {
      message,
      timestamp,
    };
  }

  getAvailableActions() {
    return Object.keys(this.actions);
  }
}
