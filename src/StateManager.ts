export default class StateManager {
  readonly data: StateData;

  constructor(name: string) {
    this.data = {
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
