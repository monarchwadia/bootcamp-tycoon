import { BootcampTycoon } from '../../src';
import { defaultGame } from '../helpers';

describe('Code Action', () => {
  let game: BootcampTycoon;

  beforeEach(() => {
    game = defaultGame();
  });

  it('increases coding skill', () => {
    expect(game.state.data.player.skills.coding).toBe(0);
    game.act({ id: 'code' });
    expect(game.state.data.player.skills.coding).toBe(1);
    game.act({ id: 'code' });
    expect(game.state.data.player.skills.coding).toBe(2);
  });
});
