import Player from './Player';

type InitOptions = {
  name: string;
};
export default class BootcampTycoon {
  readonly _initOptions: InitOptions;
  readonly player: Player;

  constructor(opts: InitOptions) {
    this._initOptions = opts;

    this.player = new Player(opts.name);
  }
}
