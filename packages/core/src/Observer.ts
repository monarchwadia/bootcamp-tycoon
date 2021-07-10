import { injectable } from 'inversify';
import { TActionFeedback } from './types/action';

type Predicate<T> = (obj: T) => void;

@injectable()
export class Observer<T = TActionFeedback> {
  subscribers: Predicate<T>[] = [];

  inform(obj: T) {
    this.subscribers.forEach((s) => s(obj));
  }

  subscribe(cb: Predicate<T>) {
    this.subscribers.push(cb);
  }
}
