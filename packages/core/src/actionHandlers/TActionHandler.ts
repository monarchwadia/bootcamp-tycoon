import 'reflect-metadata';
import { injectable } from 'inversify';
import { TAction } from '../types/action';
import StateManager from '../StateManager';

type Cost = {
  energy: number;
  minutes: number;
};

@injectable()
abstract class ActionHandler<T = any> {
  abstract readonly id: string;
  abstract cost: Cost;
  abstract handle(action: TAction<T>, state: StateManager): string;

  isEnabled(_: StateManager) {
    return true;
  }
}

export default ActionHandler;
