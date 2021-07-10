import { TAction, TActionFeedback } from './types/action';
import TActionHandler from './actionHandlers/TActionHandler';
import StateManager from './StateManager';

export default class ActionManager {
  actions: Record<string, TActionHandler>;

  constructor(actionsRegistry: TActionHandler[]) {
    this.actions = {};

    actionsRegistry.forEach((action) => {
      this.registerActionHandler(action);
    });
  }

  registerActionHandler(action: TActionHandler) {
    const { id } = action;

    // don't allow duplicate actions
    if (this.actions[id]) {
      throw new Error(`Action with name [${id}] is a duplicate.`);
    }

    this.actions[id] = action;
  }

  registerActionHandlers(...actions: TActionHandler[]) {
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
    if (actionHandler.cost.energy > state.data.player.resources.energy) {
      return {
        code: 'exhausted',
        message: "You don't have enough energy to complete this task.",
        timestamp,
      };
    }

    // deduct the energy
    state.data.player.resources.energy -= actionHandler.cost.energy;

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
