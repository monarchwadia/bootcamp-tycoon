import StateManager from '../StateManager';

type TActionHandler<T = any> = {
  readonly id: string;
  handle(action: Action<T>, state: StateManager): void;
};

export default TActionHandler;
