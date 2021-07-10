import { injectable } from 'inversify';
import StateManager from '../StateManager';
import { TAction } from '../types/action';
import ActionHandler from './TActionHandler';

@injectable()
class CodeAh extends ActionHandler<never> {
  id = 'code';
  cost = {
    energy: 1000,
    minutes: 30,
  };

  handle(_: TAction<never>, state: StateManager): string {
    state.data.player.skills.coding += 1;
    return 'You code for a while.';
  }
}

export default CodeAh;
