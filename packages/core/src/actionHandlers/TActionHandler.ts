import StateManager from '../StateManager';

type TActionHandler<T = any> = {
  cost: {
    energy: number;
    minutes: number;
  };
  readonly id: string;
  handle(action: Action<T>, state: StateManager): string;
};

export default TActionHandler;
