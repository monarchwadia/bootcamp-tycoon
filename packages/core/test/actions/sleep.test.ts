import { BootcampTycoon } from '../../src';
import { defaultGame } from '../helpers';

describe('Sleep Action', () => {
  let game: BootcampTycoon;

  beforeEach(() => {
    game = defaultGame();
  });

  it('replenishes energy', () => {
    // set energy to 0
    game.state.data.player.resources.energy.curr = 0;
    game.act({ id: 'sleep' });
    expect(game.state.data.player.resources.energy.curr).toBeGreaterThan(0);
  });
});
