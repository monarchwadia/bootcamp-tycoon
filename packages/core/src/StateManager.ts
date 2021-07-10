import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { InitOptions } from './TInitOptions';
import { TStateData } from './types/state';
import stateReportBuilder from './utils/stateReportBuilder';

@injectable()
export default class StateManager {
  readonly data: TStateData;

  constructor(opts: InitOptions) {
    this.data = {
      time: Date.now(),
      player: {
        name: opts.name,
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
