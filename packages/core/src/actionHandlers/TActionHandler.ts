import { TAction } from '../types/action';
import StateManager from '../StateManager';

type TActionHandler<T = any> = {
  cost: {
    energy: number;
    minutes: number;
  };
  isEnabled?(state: StateManager): boolean;
  readonly id: string;
  handle(action: TAction<T>, state: StateManager): string;
};

export default TActionHandler;
