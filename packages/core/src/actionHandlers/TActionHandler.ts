import { TAction } from '../types/action';
import StateManager from '../StateManager';

type TActionHandler<T = any> = {
  cost: {
    energy: number;
    minutes: number;
  };
  readonly id: string;
  handle(action: TAction<T>, state: StateManager): string;
};

export default TActionHandler;
