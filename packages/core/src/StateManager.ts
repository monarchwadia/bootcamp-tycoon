import { injectable, inject } from 'inversify';
import { InitOptions } from './InitOptions';
import { TStateData } from './types/state';
import stateReportBuilder from './utils/stateReportBuilder';

@injectable()
export default class StateManager {
  readonly data: TStateData;

  constructor(@inject(InitOptions) opts: InitOptions) {
    this.data = {
      time: Date.now(),
      player: {
        name: opts.fullName,
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
