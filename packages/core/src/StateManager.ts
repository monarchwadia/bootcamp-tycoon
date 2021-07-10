import { TStateData } from './types/state';
import stateReportBuilder from './utils/stateReportBuilder';

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

  getReport() {
    return stateReportBuilder(this.data);
  }

  toJSON() {
    return this.data;
  }
}
