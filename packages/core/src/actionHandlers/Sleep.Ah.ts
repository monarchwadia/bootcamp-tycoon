import { injectable } from 'inversify';
import StateManager from '../StateManager';
import { TAction } from '../types/action';
import ActionHandler from './ActionHandler';

@injectable()
class SleepAh extends ActionHandler<never> {
  id = 'sleep';
  cost = {
    energy: 0,
    minutes: 60,
  };

  handle(_: TAction<never>, state: StateManager): string {
    const { curr, max } = state.data.player.resources.energy;

    // sleep takes 8 hours
    const diff = max / 8;

    // don't exceed max
    let newCurr: number = Math.min(curr + diff, max);
    state.data.player.resources.energy.curr = newCurr;

    return 'You sleep it off.';
  }
}

export default SleepAh;
