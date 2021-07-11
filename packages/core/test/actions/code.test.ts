import { BootcampTycoon } from '../../src';
import { defaultGame } from '../helpers';

describe('Code Action', () => {
  let game: BootcampTycoon;

  beforeEach(() => {
    game = defaultGame();
  });

  it('increases coding skill', () => {
    expect(game.state.data.player.skills.coding).toStrictEqual(0);
    game.act({ id: 'code' });
    expect(game.state.data.player.skills.coding).toStrictEqual(1);
    game.act({ id: 'code' });
    expect(game.state.data.player.skills.coding).toStrictEqual(2);
  });
});
