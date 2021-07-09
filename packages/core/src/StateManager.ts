import { TStateData } from './types/state';

export default class StateManager {
  readonly data: TStateData;

  constructor(name: string) {
    this.data = {
      time: Date.now(),
      player: {
        name,
        resources: {
          energy: 10000,
        },
        skills: {
          coding: 0,
        },
      },
    };
  }

  toJSON() {
    return this.data;
  }
}
