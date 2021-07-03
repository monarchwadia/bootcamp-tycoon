import Player from './Player';

export default class State {
  readonly player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  toJSON() {
    return {
      player: this.player,
    };
  }
}
