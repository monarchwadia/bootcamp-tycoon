import State from '../state/State';

type TActionHandler<T = any> = {
  readonly id: string;
  handle(action: Action<T>, state: State): void;
};

export default TActionHandler;
