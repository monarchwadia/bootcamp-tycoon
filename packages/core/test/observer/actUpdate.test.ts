import { defaultGame } from '../helpers';

describe('actUpdate', () => {
  it('does updates', () => {
    let updated = false;
    const game = defaultGame();
    game.onUpdate(() => (updated = true));
    expect(updated).toStrictEqual(false);
    game.act({
      id: 'code',
    });
    expect(updated).toStrictEqual(true);
  });
});
